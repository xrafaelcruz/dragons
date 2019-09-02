import React, { useEffect } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from 'pages/Login';
import Dragons from 'pages/Dragons';
import NewDragon from 'pages/NewDragon';
import UpdateDragon from 'pages/UpdateDragon';

import { setNewUrl } from 'redux/ducks/route';

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

const Routes = ({ isAuthenticated, newUrl, setNewUrl }) => {
  useEffect(() => {
    if (newUrl) {
      history.push(newUrl);
      setNewUrl();
    }
  }, [newUrl, setNewUrl]);

  return (
    <Router history={history}>
      <Switch>
        {!isAuthenticated && <Route path="/login" component={Login} />}
        {isAuthenticated && <Route exact path="/dragons" component={Dragons} />}
        {isAuthenticated && <Route path="/new-dragon" component={NewDragon} />}
        {isAuthenticated && <Route path="/dragon/:id" component={UpdateDragon} />}

        {!isAuthenticated && <Redirect from="*" to="/login" />}
        {isAuthenticated && <Redirect from="*" to="/dragons" />}
      </Switch>
    </Router>
  );
};

const mapStateToProps = states => ({
  isAuthenticated: states.login.isAuthenticated,
  newUrl: states.route.newUrl
});

const mapDispatchToProps = dispatch => bindActionCreators({ setNewUrl }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
