import React from 'react';
// import { css } from 'styled-components';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { Flex, Box } from 'rebass';
import { authOperations, authSelectors } from '../store/auth';

const Container = styled(Box)({
  minHeight: '100vh'
});

Container.defaultProps = {
  mx: 'auto'
};

const Home = props => {
  return (
    <Flex
      flexDirection="column"
      // justifyContent="center"
      // alignItems="center"
      flexWrap="wrap"
      // css={{ maxWidth: '1024px' }}
    >
      <Container p={6}>Home Edit Test</Container>
    </Flex>
  );
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
)(Home);
