import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext/CartContext';

import {
  ProductCardWrapper,
  Image,
  Btn,
  Footer,
  FooterTitle,
  FooterPrice
} from './ProductCardStyles';

const ProductCard = function(props) {
  const { name, price, imageUrl } = props.product;
  const { isDropdownOpen, toggleDropdown, addItemToCart } = useContext(CartContext)

  const handleAddProductToCart = function() {
    addItemToCart(props.product, true);
    if (!isDropdownOpen) toggleDropdown(!isDropdownOpen);
  }

  return (
    <ProductCardWrapper>
      <Image
        src={imageUrl}
        alt={name}
      />
      <Footer>
        <FooterTitle>{name}</FooterTitle>
        <FooterPrice>{price}</FooterPrice>
      </Footer>
      <Btn
        buttonType="inverted"
        onClick={handleAddProductToCart}
      >
        Add to cart
      </Btn>
    </ProductCardWrapper>
  );
}

export default ProductCard;
