import { Fragment } from 'react';
import SignUpForm from '../../components/Forms/SignUpForm/SignUpForm';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase';

const SignIn = function() {
  const logInGoogleUser = async function() {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Fragment>
      <button onClick={logInGoogleUser}>
        Sign in with Google
      </button>
      <SignUpForm />
    </Fragment>
  );
}

export default SignIn;
