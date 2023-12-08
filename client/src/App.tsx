import React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

import { HomePage } from '@pages/HomePage';
import { LoginPage } from '@pages/LoginPage';
import { NotFoundPage } from '@pages/NotFoundPage';

import { useAuth } from '@hooks/auth';

import { AppRoute } from '@utils/route';

interface ProtectedRouteProps {
  condition: boolean;
  fallbackPath: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  condition,
  fallbackPath,
}) => (condition ? <Outlet /> : <Navigate to={fallbackPath} />);

export const App: React.FC = () => {
  const { auth } = useAuth();
  const isLoggedIn = !!auth;

  return (
    <Routes>
      <Route path={AppRoute.HOME} element={<HomePage />} />
      <Route
        element={
          <ProtectedRoute
            condition={!isLoggedIn}
            fallbackPath={AppRoute.HOME}
          />
        }
      >
        <Route path={AppRoute.LOGIN} element={<LoginPage />} />
      </Route>
      <Route path={AppRoute.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};
