import {
  CheckoutItemWrapper,
  ImageWrapper,
  Image,
  Name,
  Quantity,
  QuantityArrow,
  QuantityValue,
  Price,
  ButtonRemove
} from './CheckoutItemStyles';

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
    <CheckoutItemWrapper>
      <ImageWrapper>
        <Image
          src={imageUrl}
          alt={name}
        />
      </ImageWrapper>

      <Name>{name}</Name>

      <Quantity>
        <QuantityArrow onClick={handleRemoveItemButtonClick}>
          &#10094;
        </QuantityArrow>

        <QuantityValue>{quantity}</QuantityValue>

        <QuantityArrow onClick={handleAddItemButtonClick}>
          &#10095;
        </QuantityArrow>
      </Quantity>

      <Price>{price}</Price>

      <ButtonRemove onClick={handleRemovePositionButtonClick}>
        &#10005;
      </ButtonRemove>
    </CheckoutItemWrapper>
  );
}

export default CheckoutItem;
