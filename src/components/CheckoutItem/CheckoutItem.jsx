import './CheckoutItem.scss';
import Button from '../Button/Button';

const CheckoutItem = function(props) {
  const {name, quantity, price, imageUrl} = props.item;

  const handleRemoveItemButtonClick = function() {
    props.removeItem(props.item);
  }

  const handleAddItemButtonClick = function() {
    props.addItem(props.item);
  }

  const handleRemovePositionButtonClick = function() {
    props.removePosition(props.item);
  }

  return (
    <div className="checkout-item">
      <div className="checkout-item__image">
        <img
          src={imageUrl}
          alt={name}
        />
      </div>

      <span className="checkout-item__name">{name}</span>

      <span className="checkout-item__quantity">
        <div
          className="checkout-item__quantity-arrow"
          onClick={handleRemoveItemButtonClick}
        >
          &#10094;
        </div>
        <span className="checkout-item__quantity-value">{quantity}</span>
        <div
          className="checkout-item__quantity-arrow"
          onClick={handleAddItemButtonClick}
        >
          &#10095;
        </div>
      </span>

      <span className="checkout-item__price">{price}</span>

      <div
        className="checkout-item__btn-remove"
        onClick={handleRemovePositionButtonClick}
      >&#10005;</div>
    </div>
  );
}

export default CheckoutItem;
