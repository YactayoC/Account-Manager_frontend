import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AccountManagerHome } from '../components/AccountManager';

export const DashboardPrivate: FC = () => {
  return (
    <Routes>
      <Route path="accounts" element={<AccountManagerHome />} />
      <Route path="*" element={<Navigate to="/accounts" />} />
    </Routes>
  );
};
