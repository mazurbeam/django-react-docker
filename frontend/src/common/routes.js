import React from 'react';

import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './containers/Home';
import Login from './containers/Login';

const NavigationRoutes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/home" component={Home} />
  </Switch>
);

export default NavigationRoutes;
