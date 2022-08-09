import { useContext } from 'react';
import './Checkout.scss';
import { CartContext } from '../../contexts/CartContext/CartContext';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

const Checkout = function() {
  const {
    cartItems,
    totalPrice,
    addItemToCart,
    removeItemFromCart,
    removePositionFromCart
  } = useContext(CartContext);

  return (
    <div className="checkout">
      <div className="checkout__header">
        <div className="checkout__header-block">
          <span>Product</span>
        </div>
        <div className="checkout__header-block">
          <span>Description</span>
        </div>
        <div className="checkout__header-block">
          <span>Quantity</span>
        </div>
        <div className="checkout__header-block">
          <span>Price</span>
        </div>
        <div className="checkout__header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return (
          <CheckoutItem
            key={cartItem.id}
            item={cartItem}
            removeItem={removeItemFromCart}
            addItem={addItemToCart}
            removePosition={removePositionFromCart}
          />
        );
      })}

      <span className="checkout__total">Total: {totalPrice}</span>
    </div>
  );
}

export default Checkout;
