import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import { authSelectors } from '../store/auth';

import Home from '../pages/Home';
import Header from './Header';

const HomeContainer = props => {
  return (
    <Fragment>
      <Header {...props} bg="blue" />
      <Home {...props} />
    </Fragment>
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
