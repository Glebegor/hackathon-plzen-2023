import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '@hooks/auth';

import { AppRoute } from '@utils/route';

export const PageNavigation: React.FC = () => {
  const { auth } = useAuth();
  const isLoggedIn = !!auth;

  return (
    <nav>
      <h2>Page Navigation</h2>
      <ul>
        <li>
          <Link to={AppRoute.HOME}>Home</Link>
        </li>
        {!isLoggedIn ? (
          <li>
            <Link to={AppRoute.LOGIN}>Sign in</Link>
          </li>
        ) : (
          <li>
            <Link to={AppRoute.HOME}>Sign out</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
