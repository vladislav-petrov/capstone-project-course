import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
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
