import React from 'react';
import { MainWindow } from './main-window';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <MainWindow />
    </Provider>
  );
}
