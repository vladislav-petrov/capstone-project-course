import { Fragment } from 'react';
import { signInWithGooglePopup } from '../../utils/firebase/firebase';

const SignIn = function() {
  const logInGoogleUser = async function() {
    const response = await signInWithGooglePopup();
    console.log(response);
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
