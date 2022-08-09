import './CartDropdown.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext/CartContext';
import Button from '../Button/Button';
import CartItem from './CartItem/CartItem';

const CartDropdown = function() {
  const {
    isDropdownOpen,
    cartItems,
    toggleDropdown
  } = useContext(CartContext);

  const navigate = useNavigate();

  const handleButtonClick = function() {
    toggleDropdown(!isDropdownOpen);
    navigate('/checkout');
  }

  return (
    <div className="cart-dropdown">
      {
        cartItems.length ?
          <div className="cart-dropdown__items">
            {cartItems.map((cartItem) => {
              return (
                <CartItem
                  key={cartItem.id}
                  item={cartItem}
                />
              );
            })}
          </div>
        :
          <span className="cart-dropdown__empty-message">
            Your cart is empty
          </span>
      }
      <Button
        onClick={handleButtonClick}
      >
        Checkout
      </Button>
    </div>
  );
}

export default CartDropdown;
