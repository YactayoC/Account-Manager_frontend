import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AccountManagerHome } from '../components/AccountManager';

export const DashboardPrivate: FC = () => {
  return (
    <Routes>
      <Route path="prob" element={<AccountManagerHome />} />
      <Route path="*" element={<Navigate to="/home/prob" />} />
    </Routes>
  );
};
