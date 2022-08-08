import { createContext, useState } from 'react';
import PRODUCTS from '../../shopData.json'

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null
});

export const ProductsProvider = function({ children }) {
  const [products, setProducts] = useState(PRODUCTS);

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
