import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

const Main = function() {
  return (
    <Fragment>
      <NavigationBar />
      <Outlet />
    </Fragment>
  );
}

export default Main;
