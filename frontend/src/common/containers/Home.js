import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import { authSelectors } from '../store/auth';

import Home from '../pages/Home';
import Header from './Header';
import { Container, Viewport } from '../components/base';

const HomeContainer = props => {
  return (
    <Viewport palette="greys" opaque tone={0}>
      <Header {...props} bg="blue" />
      <Home {...props} />
    </Viewport>
  );
};

const mapStateToProps = state => ({
  errors: authSelectors.authErrors(state.auth),
  isAuthenticated: authSelectors.isAuthenticated(state.auth)
});

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (username, password) => {
//     dispatch(authOperations.login(username, password));
//   }
// });

export default connect(mapStateToProps)(HomeContainer);
