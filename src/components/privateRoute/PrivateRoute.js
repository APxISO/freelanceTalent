import React from 'react';
import { Navigate } from 'react-router-dom';
import { DefaultLayout } from '../../layout/DefaultLayout';

const isAuth = true; // Replace with your actual authentication logic

export const PrivateRoute = ({ children, ...rest }) => {
  const WrapperComponent = () => {
    return React.cloneElement(children, rest);
  };

  return isAuth ? <DefaultLayout><WrapperComponent /></DefaultLayout> : <Navigate to='/' />;
};
