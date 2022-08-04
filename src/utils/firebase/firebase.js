import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

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
