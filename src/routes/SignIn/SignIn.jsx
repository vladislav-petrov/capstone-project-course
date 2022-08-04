import { Fragment } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase';

const SignIn = function() {
  const logInGoogleUser = async function() {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
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
