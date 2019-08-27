import React from 'react';
import { Provider } from 'react-redux';
import Routes from 'routes';

//import logo from 'assets/dragon.png';
//<img src={logo} className="App-logo" alt="logo" />

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
