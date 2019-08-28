import React from 'react';
import { Provider } from 'react-redux';
import Routes from 'routes';

import store from 'redux/store';

import GlobalStyle from 'styles/global';

import Toast from 'components/Toast';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
      <Toast />
    </Provider>
  );
}

export default App;
