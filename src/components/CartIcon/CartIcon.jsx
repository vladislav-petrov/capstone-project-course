import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext/CartContext';

import {
  CartIconWrapper,
  Icon,
  ItemCounter
} from './CartIconStyles';

const CartIcon = function() {
  const {
    isDropdownOpen,
    itemsQuantity,
    toggleDropdown
  } = useContext(CartContext);

  const handleClick = function() {
    toggleDropdown(!isDropdownOpen);
  }

  return (
    <CartIconWrapper onClick={handleClick}>
      <Icon />
      <ItemCounter>{itemsQuantity}</ItemCounter>
    </CartIconWrapper>
  );
}

export default CartIcon;
