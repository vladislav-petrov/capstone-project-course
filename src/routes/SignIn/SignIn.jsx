import { Fragment } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase';

const SignIn = function() {
  const logInGoogleUser = async function() {
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Fragment>
      <button onClick={logInGoogleUser}>
        Sign in with Google
      </button>
    </Fragment>
  );
}

export default SignIn;
