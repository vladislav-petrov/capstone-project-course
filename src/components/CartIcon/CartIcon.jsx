import { useContext } from 'react';
import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shoppingBag.svg';
import { CartContext } from '../../contexts/CartContext/CartContext';

const CartIcon = function() {
  const {
    isDropdownOpen,
    cartItems,
    toggleDropdown
  } = useContext(CartContext);

  const handleClick = function() {
    toggleDropdown(!isDropdownOpen);
  }

  return (
    <div
      className="cart-icon"
      onClick={handleClick}
    >
      <ShoppingIcon className="cart-icon__icon" />
      <span className="cart-icon__item-count">{cartItems.length}</span>
    </div>
  );
}

export default CartIcon;
