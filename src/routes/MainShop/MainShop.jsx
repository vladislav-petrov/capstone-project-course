import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const MainShop = function() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}

export default MainShop;
