import { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/CategoriesContext/CategoriesContext';
import ProductCard from '../../components/ProductCard/ProductCard';

import {
  Category,
  CategoryLink,
  CategoryTitle,
  CategoryItems
} from './ShopStyles';

const Shop = function() {
  const categories = useContext(CategoriesContext);
  const categoriesArray = Object.values(categories);

  return (
    <Fragment>
      {
        categoriesArray.map((category) => {
          return (
            <Category key={category.title.toLowerCase()}>
              <CategoryLink to={category.title.toLowerCase()}>
                <CategoryTitle>
                  {category.title}
                </CategoryTitle>
              </CategoryLink>

              <CategoryItems>
                {
                  category.items.slice(0, 4).map((product) => {
                    return (
                      <ProductCard
                        key={product.id}
                        product={product}
                      />
                    );
                  })
                }
              </CategoryItems>
            </Category>
          );
        })
      }
    </Fragment>
  );
}

export default Shop;
