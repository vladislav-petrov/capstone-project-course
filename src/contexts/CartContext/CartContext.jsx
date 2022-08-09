import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
  isDropdownOpen: false,
  cartItems: [],
  itemsQuantity: 0,
  totalPrice: 0,
  toggleDropdown: () => null,
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  removePositionFromCart: () => null
});

const getArrayWithChangedQuantity = function(cartItems, item, operation) {
  return cartItems.map((cartItem) => {
    return cartItem.id === item.id ?
      {
        ...cartItem,
        quantity: operation === 'increase' ? ++cartItem.quantity : --cartItem.quantity
      }
    :
      cartItem;
  });
}

const addItemToNewArray = function(cartItems, product) {
  const itemInCart = cartItems.find((cartItem) => product.id === cartItem.id);

  if (itemInCart) {
    return getArrayWithChangedQuantity(cartItems, itemInCart, 'increase');
  }

  return [
    ...cartItems,
    {
      ...product,
      quantity: 1
    }
  ];
}

const removeItemFromNewArray = function(cartItems, item) {
  if (item.quantity > 1) {
    return getArrayWithChangedQuantity(cartItems, item, 'decrease');
  }

  return cartItems.filter((cartItem) => cartItem.id !== item.id);
}

export const CartProvider = function({ children }) {
  const [isDropdownOpen, toggleDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemsQuantity, setItemsQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newItemsQuantity = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);

    const newTotalPrice = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.price;
    }, 0);

    setItemsQuantity(newItemsQuantity);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const addItemToCart = function(product) {
    setCartItems(addItemToNewArray(cartItems, product));
  }

  const removeItemFromCart = function(item) {
    setCartItems(removeItemFromNewArray(cartItems, item));
  }

  const removePositionFromCart = function(item) {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);

    setCartItems(newCartItems);
  }

  const value = {
    isDropdownOpen,
    cartItems,
    itemsQuantity,
    totalPrice,
    toggleDropdown,
    addItemToCart,
    removeItemFromCart,
    removePositionFromCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
