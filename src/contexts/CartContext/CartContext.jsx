import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
  isDropdownOpen: false,
  cartItems: [],
  itemsQuantity: 0,
  toggleDropdown: () => null,
  addItemToCart: () => null,
  setItemsQuantity: () => null
});

const createNewCartItemsArray = function(cartItems, product) {
  const itemInCart = cartItems.find((cartItem) => product.id === cartItem.id);
  let newCartItems;

  if (itemInCart) {
    newCartItems = cartItems.map((cartItem) => {
      return cartItem.id === itemInCart.id ?
        {
          ...cartItem,
          quantity: ++cartItem.quantity
        }
      : cartItem;
    });
  }

  if (!itemInCart) {
    newCartItems = [
      ...cartItems,
      {
        ...product,
        quantity: 1
      }
    ];
  }

  return newCartItems;
}

export const CartProvider = function({ children }) {
  const [isDropdownOpen, toggleDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemsQuantity, setItemsQuantity] = useState(0)

  useEffect(() => {
    const newItemsQuantity = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);

    setItemsQuantity(newItemsQuantity);
  }, [cartItems]);

  const addItemToCart = function(product) {
    setCartItems(createNewCartItemsArray(cartItems, product));
    if (!isDropdownOpen) toggleDropdown(!isDropdownOpen);
  }

  const value = {
    isDropdownOpen,
    cartItems,
    itemsQuantity,
    toggleDropdown,
    addItemToCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
