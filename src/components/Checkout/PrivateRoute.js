import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useFilterContext } from '../../reducer/context';

const PrivateRoute = ({ children, ...rest }) => {
  const { myUser } = useFilterContext();
  return (
    <Route
      {...rest}
      render={() => {
        return myUser ? children : <Redirect to='/' />;
      }}
    ></Route>
  );
};

export default PrivateRoute;
