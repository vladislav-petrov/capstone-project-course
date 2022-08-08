import { useContext } from 'react';
import './Shop.scss';
import { ProductsContext } from '../../contexts/ProductsContext/ProductsContext';
import ProductCard from '../../components/ProductCard/ProductCard';

const Shop = function() {
  const { products }  = useContext(ProductsContext);

  return (
    <div className="shop">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            data={product}
          />
        );
      })}
    </div>
  );
}

export default Shop;
