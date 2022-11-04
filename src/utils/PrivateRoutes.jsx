import React, { useEffect, useState } from 'react';
import {Redirect, Route } from 'react-router-dom';
import {
  AuthContext,
  AuthProvider,
} from '../Services/Auth/AuthContext';
import { useContext } from 'react';

const PrivateRoute = ({ component: RoutesComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RoutesComponent {...routeProps} />
        ) : (
          <Redirect to={'/'} />
        )
      }
    />
  );
};

export default PrivateRoute;