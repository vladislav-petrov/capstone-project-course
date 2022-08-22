import { createContext, useState, useEffect } from 'react';
import { getDocuments } from '../../utils/firebase/firebase';

export const CategoriesContext = createContext({});

export const CategoriesProvider = function({ children }) {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const getCategories = async function() {
      setCategories(await getDocuments());
    }

    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
}
