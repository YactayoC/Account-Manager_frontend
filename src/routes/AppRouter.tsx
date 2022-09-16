import { FC, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useUser } from '../hooks';
import { DashboardPrivate } from './DashboardPrivate';
import { DashboardPublic } from './DashboardPublic';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { Loader } from '../components/loader';
import { AccountManagerPrevious } from '../components/AccountManager';

export const AppRouter: FC = () => {
  const { checkingUser, setUser, user, isLoading } = useUser();

  useEffect(() => {
    checkingUser();
  }, [setUser]);

  if (isLoading && !user) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AccountManagerPrevious />} />
        <Route
          path="/auth/*"
          element={
            <PublicRoute>
              <DashboardPublic />
            </PublicRoute>
          }
        />

        <Route
          path="/home/*"
          element={
            <PrivateRoute isAuthenticated={!!user}>
              <DashboardPrivate />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
