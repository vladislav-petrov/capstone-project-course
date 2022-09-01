import {
  CartItemWrapper,
  CartItemImage,
  CartItemDetails,
  CartItemName,
  CartItemPrice
} from './CartItemStyles';

const CartItem = function(props) {
  const { name, quantity, price, imageUrl } = props.item;

  return (
    <CartItemWrapper>
      <CartItemImage
        src={imageUrl}
        alt={name}
      />
      <CartItemDetails>
        <CartItemName>
          {name}
        </CartItemName>
        <CartItemPrice>
          {`${quantity} x ${price}`}
        </CartItemPrice>
      </CartItemDetails>
    </CartItemWrapper>
  );
}

export default CartItem;
