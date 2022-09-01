import { useContext } from 'react';
import { CategoriesContext } from '../../../contexts/CategoriesContext/CategoriesContext';
import ProductCard from '../../../components/ProductCard/ProductCard';

import {
  Category,
  CategoryTitle,
  CategoryItems
} from '../ShopStyles';

const ShopCategory = function(props) {
  const categories = useContext(CategoriesContext);
  const category = categories[props.category];

  return (
    category ?
      <Category>
        <CategoryTitle>
          {category.title}
        </CategoryTitle>

        <CategoryItems>
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
        </CategoryItems>
      </Category> : ''
  );
}

export default ShopCategory;
