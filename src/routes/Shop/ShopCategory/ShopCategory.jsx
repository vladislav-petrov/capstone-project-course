import { useContext } from 'react';
import '../ShopCategory.scss';
import { CategoriesContext } from '../../../contexts/CategoriesContext/CategoriesContext';
import ProductCard from '../../../components/ProductCard/ProductCard';

const ShopCategory = function(props) {
  const categories = useContext(CategoriesContext);
  const category = categories[props.category];

  return (
    category ?
      <div className="shop-category">
        <h2 className="shop-category__title">
          {category.title}
        </h2>

        <div className="shop-category__items">
          {
            category.items.map((product) => {
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

export default ShopCategory;
