import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContext/CategoriesContext';
import CategoryListItem from './CategoryListItem/CategoryListItem';
import { CategoriesWrapper } from './CategoryListStyles';

const CategoryList = function() {
  const categories = useContext(CategoriesContext);
  const categoriesArray = Object.entries(categories);

  return (
    <CategoriesWrapper>
      {categoriesArray.map((category) => {
        return (
          <CategoryListItem
            key={category[0]}
            imageURL={category[1].imageURL}
            title={category[1].title}
          />
        );
      })}
    </CategoriesWrapper>
  );
}

export default CategoryList;
