import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactElement;
  isAuthenticated: boolean;
}

export const PublicRoute: FC<Props> = ({ children, isAuthenticated }) => {
  return isAuthenticated ? <Navigate to="/" /> : children;
};
