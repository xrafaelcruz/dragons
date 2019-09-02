import React from 'react';
import { Provider } from 'react-redux';
import Routes from 'routes';

import store from 'redux/store';

import GlobalStyle from 'styles/global';

import Toast from 'components/Toast';
import Header from 'components/Header';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Toast />
      <Header />
      <Routes />
    </Provider>
  );
}

export default App;
