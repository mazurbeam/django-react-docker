import React from 'react';
import { Switch } from 'react-router-dom';

import { Normalize } from 'styled-normalize'

import Routes from '../routes';
import { GlobalStyle } from '../theme';
import { Viewport } from '../components/base';

export default () => (
  <Viewport>
    <GlobalStyle />
    <Normalize/>
    <Switch>
      <Routes />
    </Switch>
  </Viewport>
);
