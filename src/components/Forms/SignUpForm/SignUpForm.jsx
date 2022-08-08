import { useState, useContext } from 'react';
import './SignUpForm.scss';
import Form from '../Form/Form';
import { UserContext } from '../../../contexts/UserContext';

import {
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword
} from '../../../utils/firebase/firebase';

const defaultItemsData = [
  {
    id: '1',
    label: 'Display Name',
    name: 'displayName',
    type: 'text',
    value: ''
  },
  {
    id: '2',
    label: 'Email',
    name: 'email',
    type: 'email',
    value: ''
  },
  {
    id: '3',
    label: 'Password',
    name: 'password',
    type: 'password',
    value: ''
  },
  {
    id: '4',
    label: 'Confirm Password',
    name: 'confirmPassword',
    type: 'password',
    value: ''
  }
];

const SignUpForm = function() {
  const [itemsData, setItemsData] = useState(defaultItemsData);
  const { setCurrentUser } = useContext(UserContext);

  const handleChange = function(name, value) {
    setItemsData(itemsData.map((itemData) => {
      return itemData.name === name ?
        { ...itemData, value: value } :
        itemData;
    }));
  }

  const handleSubmit = async function() {
    try {
      const displayName =
        itemsData.find((itemData) => itemData.name === 'displayName').value;

      const email =
        itemsData.find((itemData) => itemData.name === 'email').value;

      const password =
        itemsData.find((itemData) => itemData.name === 'password').value;

      const confirmPassword =
        itemsData.find((itemData) => itemData.name === 'confirmPassword').value;

      if (password !== confirmPassword) {
        alert('Passwords do not match');

        return;
      }

      const user = await createAuthUserWithEmailAndPassword(
        displayName,
        email,
        password
      );

      setCurrentUser(user);
      await createUserDocumentFromAuth(user);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Can not create user, email already in use');
      }

      console.log(error.message);
    }
  }

  return (
    <div className="sign-up-form">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <Form
        itemsData={itemsData}
        submitButtonValue="Sign Up"
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default SignUpForm;
