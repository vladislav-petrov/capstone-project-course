import { Fragment, useContext } from 'react';
import '../Category.scss';
import { CategoriesContext } from '../../../contexts/CategoriesContext/CategoriesContext';
import ProductCard from '../../../components/ProductCard/ProductCard';

const Hats = function() {
  const { hats: hatsCategory } = useContext(CategoriesContext);

  return (
    hatsCategory ?
      <div className="shop-category">
        <h2 className="shop-category__title">
          {hatsCategory.title}
        </h2>

        <div className="shop-category__items">
          {
            hatsCategory.items.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              );
            })
          }
        </div>
      </div> : ''
  );
}

export default Hats;
