import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from 'pages/Login';
import Home from 'pages/Home';

const Routes = ({ isAuthenticated }) => {
  return (
    <BrowserRouter>
      <Switch>
        {!isAuthenticated && <Route exact path="/login" component={Login} />}
        {isAuthenticated && <Route path="/home" component={Home} />}

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
