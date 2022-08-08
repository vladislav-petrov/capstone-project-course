import { createContext, useState, useEffect } from 'react';

import {
  listenAuthStateChange,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase';

export const UserContext = createContext({
  currentUser: null
});

export const UserProvider = function({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const value = {
    currentUser
  };

  useEffect(() => {
    const unsubscribe = listenAuthStateChange(async (user) => {
      try {
        if (user) {
          await createUserDocumentFromAuth(user);
        }

        setCurrentUser(user);
      } catch (error) {
        console.log(error.message);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
