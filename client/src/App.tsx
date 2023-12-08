import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

import { HomePage } from '@pages/HomePage';
import { LoginPage } from '@pages/LoginPage';
import { ManagementPage } from '@pages/ManagementPage';
import { PatientDetailPage } from '@pages/PatientDetailPage';
import { LogoutPage } from '@pages/LogoutPage';
import { NotFoundPage } from '@pages/NotFoundPage';

import { useAuth } from '@hooks/auth';

import { setAuth } from '@store/slices/auth';

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
  const dispatch = useDispatch();
  const { auth } = useAuth();

  useEffect(() => {
    const localAuth = localStorage.getItem('auth');
    if (!localAuth) {
      dispatch(setAuth(null));
      return;
    }
    dispatch(setAuth(JSON.parse(localAuth)));
  }, []);

  if (typeof auth === 'undefined') {
    return <p>Loading...</p>;
  }

  const isLoggedIn = !!auth;

  return (
    <Routes>
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
      <Route
        element={
          <ProtectedRoute
            condition={isLoggedIn}
            fallbackPath={AppRoute.LOGIN}
          />
        }
      >
        <Route path={AppRoute.HOME} element={<HomePage />} />
        <Route path={AppRoute.MANAGEMENT} element={<ManagementPage />} />
        <Route
          path={`${AppRoute.PATIENT_DETAIL}/:id`}
          element={<PatientDetailPage />}
        />
        <Route path={AppRoute.LOGOUT} element={<LogoutPage />} />
      </Route>
      <Route path={AppRoute.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};
