import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../containers/Login';
import HomeContainer from '../containers/Home';
import RosterContainer from '../containers/Roster';
import PrivateRoute from './PrivateRoute';

export default () =>
  <Switch>
    <Route exact path="/" component={HomeContainer} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/artists" component={RosterContainer} />
    <Route path="/" component={HomeContainer} />
  </Switch>;
