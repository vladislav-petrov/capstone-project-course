import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext/CartContext';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import {
  CheckoutWrapper,
  Header,
  HeaderBlock,
  Total
} from './CheckoutStyles';

const Checkout = function() {
  const {
    cartItems,
    totalPrice,
    addItemToCart,
    removeItemFromCart,
    removePositionFromCart
  } = useContext(CartContext);

  return (
    <CheckoutWrapper>
      <Header>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </Header>

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

      <Total>Total: {totalPrice}</Total>
    </CheckoutWrapper>
  );
}

export default Checkout;
