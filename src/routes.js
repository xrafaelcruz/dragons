import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from 'pages/Login';
import Dragons from 'pages/Dragons';
import UpdateDragon from 'pages/UpdateDragon';

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

const Routes = ({ isAuthenticated }) => {
  return (
    <Router history={history}>
      <Switch>
        {!isAuthenticated && <Route path="/login" component={Login} />}
        {isAuthenticated && <Route path="/dragons" component={Dragons} />}
        {isAuthenticated && <Route path="/dragon/:id" component={UpdateDragon} />}

        {!isAuthenticated && <Redirect from="*" to="/login" />}
        {isAuthenticated && <Redirect from="*" to="/dragons" />}
      </Switch>
    </Router>
  );
};

const mapStateToProps = states => ({
  isAuthenticated: states.login.isAuthenticated
});

export default connect(mapStateToProps)(Routes);
