import { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Category.scss';
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
            <div
              className="shop-category"
              key={category.title.toLowerCase()}
            >
              <Link to={category.title.toLowerCase()}>
                <h2 className="shop-category__title">
                  {category.title}
                </h2>
              </Link>

              <div className="shop-category__items">
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
              </div>
            </div>
          );
        })
      }
    </Fragment>
  );
}

export default Shop;
