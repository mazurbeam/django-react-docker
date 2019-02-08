import React from 'react';
import { Switch } from 'react-router-dom';
import Routes from '../routes';
import { GlobalStyle } from '../theme';

export default () => (
  <div>
    <GlobalStyle />
    <Switch>
      <Routes />
    </Switch>
  </div>
);
