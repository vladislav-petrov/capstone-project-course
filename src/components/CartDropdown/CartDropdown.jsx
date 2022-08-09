import './CartDropdown.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext/CartContext';
import Button from '../Button/Button';
import CartItem from './CartItem/CartItem';

const CartDropdown = function() {
  const { cartItems } = useContext(CartContext);

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
      <Button>
        Checkout
      </Button>
    </div>
  );
}

export default CartDropdown;
