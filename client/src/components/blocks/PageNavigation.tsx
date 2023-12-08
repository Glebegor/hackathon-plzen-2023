import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../utils/route';

export const PageNavigation: React.FC = () => (
  <nav>
    <h2>Page Navigation</h2>
    <ul>
      <li>
        <Link to={AppRoute.HOME}>Home</Link>
      </li>
    </ul>
  </nav>
);
