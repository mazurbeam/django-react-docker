import React from 'react';
// import { css } from 'styled-components';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Flex, Box } from 'rebass';
import { login } from '../store/auth/actions';
import { authErrors, isAuthenticated } from '../store/auth/reducer';
import LoginForm from '../components/LoginForm';

const Container = styled(Box)({
  minHeight: '100vh'
});

Container.defaultProps = {
  mx: 'auto'
};

const Login = props => {
  if (props.isAuthenticated) {
    return <Redirect to="/home" />;
  } else {
    return (
      <Flex
        flexDirection="column"
        // justifyContent="center"
        // alignItems="center"
        flexWrap="wrap"
        // css={{ maxWidth: '1024px' }}
      >
        <Container p={6}>
          <LoginForm {...props} />
        </Container>
      </Flex>
    );
  }
};

const mapStateToProps = state => ({
  errors: authErrors(state.auth),
  isAuthenticated: isAuthenticated(state.auth)
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (username, password) => {
    dispatch(login(username, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
