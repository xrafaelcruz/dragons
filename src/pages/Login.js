import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import logo from 'assets/images/dragon.png';

import Page from 'styles/page';
import Button from 'styles/button';
import { Form, Wrapper } from 'styles/login';

import { login } from 'redux/ducks/login';

import Input from 'components/Input';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.login(username, password);
  }

  return (
    <Page data-page="login" x="center" y="center">
      <Wrapper>
        <img src={logo} className="App-logo" alt="logo" />

        <Form onSubmit={handleSubmit}>
          <Input
            input={{
              value: username,
              type: 'text',
              placeholder: 'Username',
              onChange: e => setUsername(e.target.value)
            }}
          />

          <Input
            input={{
              value: password,
              type: 'password',
              placeholder: 'Username',
              onChange: e => setPassword(e.target.value)
            }}
          />

          <Button type="submit">Login</Button>
        </Form>
      </Wrapper>
    </Page>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Login);
