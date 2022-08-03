import { Link } from 'react-router-dom';
import './NavigationBar.scss';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

const NavigationBar = function() {
  return (
    <div className="navigation-bar">
      <Link
        className="navigation-bar__logo"
        to="/"
      >
        <CrownLogo className="navigation-bar__logo-image" />
      </Link>
      <nav className="navigation-bar__links">
        <Link
          className="navigation-bar__link"
          to="/shop"
        >
          Shop
        </Link>
      </nav>
    </div>
  );
}

export default NavigationBar;
