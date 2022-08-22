import { useContext } from 'react';
import './CategoryList.scss';
import { CategoriesContext } from '../../contexts/CategoriesContext/CategoriesContext';
import CategoryListItem from './CategoryListItem/CategoryListItem';

const CategoryList = function() {
  const categories = useContext(CategoriesContext);
  const categoriesArray = Object.entries(categories);

  return (
    <div className="categories">
      {categoriesArray.map((category) => {
        return (
          <CategoryListItem
            key={category[0]}
            imageURL={category[1].imageURL}
            title={category[1].title}
          />
        );
      })}
    </div>
  );
}

export default CategoryList;
