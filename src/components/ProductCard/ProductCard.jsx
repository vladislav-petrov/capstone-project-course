import { useContext } from 'react';
import './ProductCard.scss';
import Button from '../Button/Button';
import { CartContext } from '../../contexts/CartContext/CartContext';

const ProductCard = function(props) {
  const { name, price, imageUrl } = props.product;
  const { addItemToCart } = useContext(CartContext)

  const handleAddProductToCart = function() {
    addItemToCart(props.product);
  }

  return (
    <div className="product-card">
      <img
        src={imageUrl}
        alt={name}
      />
      <div className="product-card__footer">
        <span className="product-card__title">{name}</span>
        <span className="product-card__price">{price}</span>
      </div>
      <Button
        buttonType="inverted"
        onClick={handleAddProductToCart}
      >
        Add to cart
      </Button>
    </div>
  );
}

export default ProductCard;
