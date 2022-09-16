import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactElement;
  isAuthenticated: boolean;
}

export const PrivateRoute: FC<Props> = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/auth/login" />;
};
