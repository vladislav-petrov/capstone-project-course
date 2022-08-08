import { useState } from 'react';
import './SignInForm.scss';
import Form from '../Form/Form';
import Button from '../../Button/Button';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../../utils/firebase/firebase';

const defaultItemsData = [
  {
    id: '1',
    label: 'Email',
    name: 'email',
    type: 'email',
    value: ''
  },
  {
    id: '2',
    label: 'Password',
    name: 'password',
    type: 'password',
    value: ''
  }
];

const SignInForm = function() {
  const [itemsData, setItemsData] = useState(defaultItemsData);

  const signInWithGoogle = async function() {
    try {
      await signInWithGooglePopup();
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleChange = function(name, value) {
    setItemsData(itemsData.map((itemData) => {
      return itemData.name === name ?
        { ...itemData, value: value } :
        itemData;
    }));
  }

  const handleSubmit = async function() {
    try {
      const email =
        itemsData.find((itemData) => itemData.name === 'email').value;

      const password =
        itemsData.find((itemData) => itemData.name === 'password').value;

      await signInAuthUserWithEmailAndPassword(email, password);
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        alert('Incorrect password for email');
      }

      if (error.code === 'auth/user-not-found') {
        alert('No user associated with this email');
      }

      console.log(error.message);
    }
  }

  return (
    <div className="sign-in-form">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <Form
        itemsData={itemsData}
        submitButtonValue="Sign In"
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      >
        <Button
          type="button"
          buttonType="google"
          onClick={signInWithGoogle}
        >
          Google Sign In
        </Button>
      </Form>
    </div>
  );
}

export default SignInForm;
