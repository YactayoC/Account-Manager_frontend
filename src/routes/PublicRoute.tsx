import React, { FC } from 'react';

interface Props {
  children: React.ReactElement;
  isAuthenticated?: boolean;
}

export const PublicRoute: FC<Props> = ({ children }) => {
  // return !isAuthenticated ? <Navigate to="/" /> : children;
  return children;
};
