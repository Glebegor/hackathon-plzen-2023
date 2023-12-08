import React from 'react';

import { DefaultLayout } from '../layouts/DefaultLayout';

export const NotFoundPage: React.FC = () => (
  <DefaultLayout>
    <h1>Error 404</h1>
    <p>Page not found.</p>
  </DefaultLayout>
);
