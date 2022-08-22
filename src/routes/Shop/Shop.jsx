import { useContext, Fragment } from 'react';
import './Shop.scss';
import { CategoriesContext } from '../../contexts/CategoriesContext/CategoriesContext';
import ProductCard from '../../components/ProductCard/ProductCard';

const Shop = function() {
  const categories = useContext(CategoriesContext);
  const categoriesArray = Object.values(categories);

  return (
    <Fragment>
      {
        categoriesArray.map((category) => {
          return (
            <Fragment key={category.title.toLowerCase()}>
              <h2>{category.title}</h2>

              <div className="shop">
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
            </Fragment>
          );
        })
      }
    </Fragment>
  );
}

export default Shop;
