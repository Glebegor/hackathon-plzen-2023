import React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '@components/elements/Icon';

import { useAuth } from '@hooks/auth';

import { AppRoute } from '@utils/route';

export const PageNavigation: React.FC = () => {
  const { auth } = useAuth();
  const isLoggedIn = !!auth;

  return (
    <nav>
      <h2>Page Navigation</h2>
      <ul>
        {!isLoggedIn ? (
          <React.Fragment>
            <li>
              <Link to={AppRoute.LOGIN}>Sign in</Link>
            </li>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <li>
              <Icon name="users" />
              <Link to={AppRoute.HOME}>Dashboard</Link>
            </li>
            <li>
              <Icon name="list-check" />
              <Link to={AppRoute.MANAGEMENT}>Management</Link>
            </li>
            <li>
              <Icon name="user" />
              <span>Helena Pejsánková</span>
            </li>
            <li>
              <Icon name="right-from-bracket" />
              <Link to={AppRoute.LOGOUT}>Sign out</Link>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};
