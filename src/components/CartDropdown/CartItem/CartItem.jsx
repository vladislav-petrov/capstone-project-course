import './CartItem.scss';

const CartItem = function(props) {
  const { name, quantity, price, imageUrl } = props.item;

  return (
    <div className="cart-item">
      <img
        src={imageUrl}
        alt={name}
      />
      <div className="cart-item__details">
        <span className="cart-item__name">{name}</span>
        <span className="cart-item__price">{`${quantity} x ${price}`}</span>
      </div>
    </div>
  );
}

export default CartItem;
