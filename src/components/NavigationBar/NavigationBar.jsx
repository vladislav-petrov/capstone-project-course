import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.scss';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/UserContext/UserContext';
import { signOutUser } from '../../utils/firebase/firebase';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { CartContext } from '../../contexts/CartContext/CartContext';

const NavigationBar = function() {
  const { currentUser } = useContext(UserContext);
  const { isDropdownOpen } = useContext(CartContext);

  const handleClick = async function() {
    try {
      await signOutUser();
    } catch (error) {
      console.log(error.message);
    }
  }

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
        {
          currentUser ? (
            <Fragment>
              <span
                className="navigation-bar__link"
                onClick={handleClick}
              >
                Sign Out
              </span>
            </Fragment>
          ) : (
            <Link
              className="navigation-bar__link"
              to="/auth"
            >
              Sign In
            </Link>
          )
        }
        <CartIcon />
      </nav>
      {isDropdownOpen ? <CartDropdown /> : null}
    </div>
  );
}

export default NavigationBar;
