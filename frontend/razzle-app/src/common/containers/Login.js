import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Flex } from 'rebass';
import { Box } from 'reakit';
import { authOperations, authSelectors } from '../store/auth';
import { Container, Viewport } from '../components/base';
import Header from './Header';

import LoginForm from '../components/LoginForm';

const Login = props => {
  if (props.isAuthenticated) {
    return <Redirect to="/home" />;
  } else {
    return (
        <Flex bg="" flexDirection="column" flexWrap="wrap">
          <Header/>
          <Container p={6}>

            <LoginForm {...props} />
          </Container>
        </Flex>
    );
  }
};

const mapStateToProps = state => ({
  errors: authSelectors.authErrors(state.auth),
  isAuthenticated: authSelectors.isAuthenticated(state.auth)
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (username, password) => {
    dispatch(authOperations.login(username, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
