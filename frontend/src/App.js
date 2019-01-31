import React from 'react';
import { Box } from 'rebass';
import { withRouter } from 'react-router';

// import Route from 'react-router-dom/Route';
// import Switch from 'react-router-dom/Switch';
import NavigationRoutes from './common/routes';
import { GlobalStyle } from './common/theme';
import { Normalize } from '@smooth-ui/core-sc';
// import Home from './Home';
// import './App.css';

const App = () => (
  <Box bg="bg">
    <GlobalStyle />
    <Normalize />
    <NavigationRoutes />
  </Box>
);

export default withRouter(App);
