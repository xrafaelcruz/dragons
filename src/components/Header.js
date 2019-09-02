import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HeaderStyle from 'styles/header';
import { ButtonLink } from 'styles/button';

import { logout } from 'redux/ducks/login';
import { setNewUrl } from 'redux/ducks/route';

function Header(props) {
  function dragonList() {
    props.setNewUrl('/dragons');
  }

  function newDragon() {
    props.setNewUrl('/new-dragon');
  }

  function logout() {
    props.logout();
    props.setNewUrl('/login');
  }

  if (props.isAuthenticated) {
    return (
      <HeaderStyle data-component="header">
        <ButtonLink onClick={dragonList}>Dragon List</ButtonLink>
        <ButtonLink onClick={newDragon}>New Dragon</ButtonLink>
        <ButtonLink onClick={logout}>Logout</ButtonLink>
      </HeaderStyle>
    );
  }

  return null;
}

const mapStateToProps = states => ({
  isAuthenticated: states.login.isAuthenticated
});

const mapDispatchToProps = dispatch => bindActionCreators({ logout, setNewUrl }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
