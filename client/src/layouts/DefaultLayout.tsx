import React from 'react';

import { PageNavigation } from '../components/blocks/PageNavigation';
import { PageFooter } from '../components/blocks/PageFooter';

interface Props {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<Props> = ({ children }) => (
  <React.Fragment>
    <PageNavigation />
    {children}
    <PageFooter />
  </React.Fragment>
);
