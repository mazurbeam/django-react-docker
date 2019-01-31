import React, { Component } from 'react';

import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './containers/Home';
import Login from './containers/Login';
import PrivateRoute from './containers/PrivateRoute';

class NavigationRoutes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/home" component={Home} />
      </Switch>
    );
  }
}

export default NavigationRoutes;
