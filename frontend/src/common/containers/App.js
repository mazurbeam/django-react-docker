import React from 'react';
import { Switch } from 'react-router-dom';
import Routes from '../routes';
import { GlobalStyle } from '../theme';
import { Viewport } from '../components/base';

export default () => (
  <Viewport>
    <GlobalStyle />
    <Switch>
      <Routes />
    </Switch>
  </Viewport>
);
