import App from '../App';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import configureStore from '../common/store/configureStore';
import React from 'react';
import { hydrate } from 'react-dom';
import theme from '../common/theme';

const { store } = configureStore();

const Application = (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

hydrate(Application, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
