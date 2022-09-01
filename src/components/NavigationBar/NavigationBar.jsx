import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/UserContext/UserContext';
import { signOutUser } from '../../utils/firebase/firebase';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { CartContext } from '../../contexts/CartContext/CartContext';

import {
  NavigationBarWrapper,
  NavigationBarLogo,
  NavigationBarLinks,
  NavigationBarLink
} from './NavigationBarStyles';

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
    <NavigationBarWrapper>
      <NavigationBarLogo to="/">
        <CrownLogo />
      </NavigationBarLogo>

      <NavigationBarLinks>
        <NavigationBarLink to="/shop">
          Shop
        </NavigationBarLink>
        {
          currentUser ? (
            <NavigationBarLink as="span" onClick={handleClick}>
              Sign Out
            </NavigationBarLink>
          ) : (
            <NavigationBarLink to="/auth">
              Sign In
            </NavigationBarLink>
          )
        }
        <CartIcon />
      </NavigationBarLinks>

      {isDropdownOpen ? <CartDropdown /> : null}
    </NavigationBarWrapper>
  );
}

export default NavigationBar;
