import { Link } from 'react-router-dom';
import './CategoryListItem.scss';

const CategoryListItem = function(props) {
  return (
    <Link
      className="category"
      to={`shop/${props.title.toLowerCase()}`}
    >
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
    </Link>
  );
}

export default CategoryListItem;
