import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from '@pages/HomePage';
import { NotFoundPage } from '@pages/NotFoundPage';

import { AppRoute } from '@utils/route';

export const App: React.FC = () => (
  <Routes>
    <Route path={AppRoute.HOME} element={<HomePage />} />
    <Route path={AppRoute.NOT_FOUND} element={<NotFoundPage />} />
  </Routes>
);
