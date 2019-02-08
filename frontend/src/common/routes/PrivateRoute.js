import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import * as reducers from '../store/auth/reducer';
import { authSelectors } from '../store/auth';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated === true ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state.auth)
});

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);
