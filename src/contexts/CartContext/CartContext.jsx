import { createContext, useState } from 'react';

export const CartContext = createContext({
  isDropdownOpen: false,
  cartItems: [],
  toggleDropdown: () => null,
  setCartItems: () => null
});

export const CartProvider = function({ children }) {
  const [isDropdownOpen, toggleDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const value = {
    isDropdownOpen,
    cartItems,
    toggleDropdown,
    setCartItems
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
