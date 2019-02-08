import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Login from '../containers/Login';
import HomeContainer from '../containers/Home';
import PrivateRoute from './PrivateRoute';

export default () => (
  <Fragment>
    <Route exact path="/" component={Login} />
    <PrivateRoute path="/home" component={HomeContainer} />
  </Fragment>
);
