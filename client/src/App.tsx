import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from '@pages/HomePage';
import { LoginPage } from '@pages/LoginPage';
import { RegisterPage } from '@pages/RegisterPage';
import { NotFoundPage } from '@pages/NotFoundPage';

import { AppRoute } from '@utils/route';

export const App: React.FC = () => (
  <Routes>
    <Route path={AppRoute.HOME} element={<HomePage />} />
    <Route path={AppRoute.LOGIN} element={<LoginPage />} />
    <Route path={AppRoute.REGISTER} element={<RegisterPage />} />
    <Route path={AppRoute.NOT_FOUND} element={<NotFoundPage />} />
  </Routes>
);
