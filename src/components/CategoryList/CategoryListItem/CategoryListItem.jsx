import './CategoryListItem.scss';

const CategoryListItem = function(props) {
  return (
    <div className="category">
      <div
        className="category__background-image"
        style={{
          backgroundImage: `url(${props.imageURL})`
        }}
      />
      <div className="category__info">
        <h2 className="category__info-title">{props.title}</h2>
        <span className="category__info-subtitle">Shop Now</span>
      </div>
    </div>
  );
}

export default CategoryListItem;
