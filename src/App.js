import React from 'react';
import { Provider } from 'react-redux';
import Routes from 'routes';

import GlobalStyle from 'styles/global';
import store from 'redux/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}

export default App;
