import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext/ProductsContext';

const Shop = function() {
  const { products }  = useContext(ProductsContext);

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>
              {product.name}
            </h2>
          </div>
        );
      })}
    </div>
  );
}

export default Shop;
