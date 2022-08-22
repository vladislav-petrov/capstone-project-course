import { createContext, useState, useEffect } from 'react';
import { getDocuments } from '../../utils/firebase/firebase';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null
});

export const ProductsProvider = function({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategories = async function() {
      console.log(await getDocuments());
    }

    getCategories();
  }, []);

  const value = {
    products,
    setProducts
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
