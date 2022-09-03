import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import MainLayout from './MainLayout';
import { Provider } from 'react-redux';
import appReduxStore from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appReduxStore}>
    <MainLayout />
  </Provider>
);
