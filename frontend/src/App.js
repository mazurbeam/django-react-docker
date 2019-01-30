import React, { Fragment } from 'react';
import { Box } from 'rebass';
// import Route from 'react-router-dom/Route';
// import Switch from 'react-router-dom/Switch';
import NavigationRoutes from './common/routes';
import { GlobalStyle } from './common/theme';
// import Home from './Home';
// import './App.css';

const App = () => (
  <Box height={1}>
    <GlobalStyle />
    <NavigationRoutes />
  </Box>
);

export default App;
