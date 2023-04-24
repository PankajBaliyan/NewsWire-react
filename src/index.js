import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'

import { Provider } from 'react-redux';
import ReduxStore from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={ReduxStore()}>
    <AppRoutes />
  </Provider>
  </React.StrictMode>
);