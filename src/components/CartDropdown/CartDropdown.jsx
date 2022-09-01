import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext/CartContext';
import CartItem from './CartItem/CartItem';

import {
  CartDropdownWrapper,
  CartDropdownItems,
  CartDropdownEmptyMessage,
  CartDropdownCheckoutButton
} from './CartDropdownStyles';

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
    <CartDropdownWrapper>
      {
        cartItems.length ?
          <CartDropdownItems>
            {cartItems.map((cartItem) => {
              return (
                <CartItem
                  key={cartItem.id}
                  item={cartItem}
                />
              );
            })}
          </CartDropdownItems>
        :
          <CartDropdownEmptyMessage>
            Your cart is empty
          </CartDropdownEmptyMessage>
      }
      <CartDropdownCheckoutButton onClick={handleButtonClick}>
        Checkout
      </CartDropdownCheckoutButton>
    </CartDropdownWrapper>
  );
}

export default CartDropdown;
