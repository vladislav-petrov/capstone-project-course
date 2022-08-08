import './ProductCard.scss';
import Button from '../Button/Button';

const ProductCard = function(props) {
  const { name: title, price, imageUrl: imageURL } = props.data;

  return (
    <div className="product-card">
      <img
        src={imageURL}
        alt={title}
      />
      <div className="product-card__footer">
        <span className="product-card__title">{title}</span>
        <span className="product-card__price">{price}</span>
      </div>
      <Button
        buttonType="inverted"
      >
        Add to cart
      </Button>
    </div>
  );
}

export default ProductCard;
