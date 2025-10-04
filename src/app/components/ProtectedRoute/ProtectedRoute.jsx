import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from "react-router-dom";


export const ProtectedRoute = ({ role = {}, component: Component, ...rest }) => {

  const user = useSelector(state => state.user);
  const { authentication, redirection } = role;

  return (
    <Route
      {...rest}
      render={props => (
        user.loggedIn === authentication
          ? <Component {...props} />
          : <Redirect to={redirection} />
      )}
    />
  )
}
