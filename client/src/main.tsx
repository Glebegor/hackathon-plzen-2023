import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './App.tsx';

import { store } from '@store/base';

import '@styles/reset.scss';
import '@styles/breakpoint.scss';
import '@styles/main.scss';
import '@styles/element.scss';
import '@styles/animation.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  </React.StrictMode>
);
