import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBv_tRWdk04AuuLua-mqVOsa0JWfi_uF8E",
  authDomain: "capstone-project-course.firebaseapp.com",
  projectId: "capstone-project-course",
  storageBucket: "capstone-project-course.appspot.com",
  messagingSenderId: "236857600765",
  appId: "1:236857600765:web:9b4f64a11bfd026e0eec94"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async function(userAuth) {
  try {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }

    return userDocRef;
  } catch (error) {
    throw error;
  }
}

export const createAuthUserWithEmailAndPassword = async function(
  displayName,
  email,
  password
) {
  try {
    if (!email || !password) return;

    await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: displayName
    });

    return auth.currentUser;
  } catch (error) {
    throw error;
  }
}

export const signInAuthUserWithEmailAndPassword = async function(email, password) {
  try {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error;
  }
}

export const signOutUser = async function() {
  try {
    return await signOut(auth);
  } catch (error) {
    throw error;
  }
}

export const listenAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export const addCollectionAndDocuments = async function(collectionKey, objectsToAdd) {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());

    batch.set(docRef, object);
  });

  await batch.commit();
}

export const getDocuments = async function() {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categories = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, imageURL, items } = docSnapshot.data();

    acc[title.toLowerCase()] = {
      title,
      imageURL,
      items
    };

    return acc;
  }, {});

  return categories;
}
