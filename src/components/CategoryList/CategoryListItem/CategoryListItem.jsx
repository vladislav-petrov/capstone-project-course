import {
  CategoryLink,
  BackgroundImage,
  Info,
  InfoTitle,
  InfoSubtitle
} from './CategoryListItemStyles';

const CategoryListItem = function(props) {
  return (
    <CategoryLink to={`shop/${props.title.toLowerCase()}`}>
      <BackgroundImage imageURL={props.imageURL} />
      <Info>
        <InfoTitle>{props.title}</InfoTitle>
        <InfoSubtitle>Shop Now</InfoSubtitle>
      </Info>
    </CategoryLink>
  );
}

export default CategoryListItem;
