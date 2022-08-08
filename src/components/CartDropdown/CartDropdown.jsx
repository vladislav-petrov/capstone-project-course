import './CartDropdown.scss';
import { useContext } from 'react';
import Button from '../Button/Button';
import { CartContext } from '../../contexts/CartContext/CartContext';

const CartDropdown = function() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown__items">
        {cartItems.map((cartItem) => {
          return (
            <div>
              
            </div>
          );
        })}
      </div>
      <Button>
        Checkout
      </Button>
    </div>
  );
}

export default CartDropdown;
