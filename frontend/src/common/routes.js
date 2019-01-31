import React from 'react';

import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './containers/Home';
import Login from './containers/Login';
import PrivateRoute from './containers/PrivateRoute';

const NavigationRoutes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <PrivateRoute path="/home" component={Home} />
  </Switch>
);

export default NavigationRoutes;
