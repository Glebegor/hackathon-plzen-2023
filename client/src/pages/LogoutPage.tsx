import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { DefaultLayout } from '@layouts/DefaultLayout';

import { setAuth } from '@store/slices/auth';

export const LogoutPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuth(null));
  });

  return (
    <DefaultLayout>
      <h1>Logout</h1>
    </DefaultLayout>
  );
};
