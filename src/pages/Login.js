import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import logo from 'assets/dragon.png';

import Page from 'styles/page';
import Button from 'styles/button';
import { Input } from 'styles/form';
import { Form, Wrapper } from 'styles/login';

import { login } from 'redux/ducks/login';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.login(username, password);
  }

  return (
    <Page data-page="login" center>
      <Wrapper>
        <img src={logo} className="App-logo" alt="logo" />

        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
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
