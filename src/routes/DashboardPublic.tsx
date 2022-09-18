import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Confirm, Login, Register } from '../components/auth';

export const DashboardPublic: FC = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="confirm" element={<Confirm />} />
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
