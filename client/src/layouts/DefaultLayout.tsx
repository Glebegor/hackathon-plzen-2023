import React from 'react';

import { PageNavigation } from '../components/blocks/PageNavigation';

interface Props {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<Props> = ({ children }) => (
  <React.Fragment>
    <PageNavigation />
    {children}
  </React.Fragment>
);
