import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from 'pages/Login';
import Home from 'pages/Home';

const p1 = () => <h1>Pagina 1</h1>;

const Routes = ({ isAuthenticated }) => {
  return (
    <BrowserRouter>
      <Switch>
        {!isAuthenticated && <Route path="/login" component={Login} />}
        {isAuthenticated && <Route path="/home" component={Home} />}
        {isAuthenticated && <Route path="/p1" component={p1} />}

        {!isAuthenticated && <Redirect from="*" to="/login" />}
        {isAuthenticated && <Redirect from="*" to="/home" />}
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = states => ({
  isAuthenticated: states.login.isAuthenticated
});

export default connect(mapStateToProps)(Routes);
