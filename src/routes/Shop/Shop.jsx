import { useContext } from 'react';
import './Shop.scss';
import { CategoriesContext } from '../../contexts/CategoriesContext/CategoriesContext';
import ProductCard from '../../components/ProductCard/ProductCard';

const Shop = function() {
  const categories = useContext(CategoriesContext);
  const categoriesArray = Object.values(categories);

  return (
    <div className="shop">
      {categoriesArray.reduce((arr, category) => {
        const categoryProducts = category.items.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
            />
          );
        });

        return arr.concat(categoryProducts);
      }, [])}
    </div>
  );
}

export default Shop;
