import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AccountManagerPrevious } from '../components/AccountManager';
import { DashboardPublic } from './DashboardPublic';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AccountManagerPrevious />} />
        <Route
          path="/auth/*"
          element={
            <PublicRoute isAuthenticated={false}>
              <DashboardPublic />
            </PublicRoute>
          }
        />

        <Route
          path="/home"
          element={
            <PrivateRoute isAuthenticated={true}>
              <DashboardPublic />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};