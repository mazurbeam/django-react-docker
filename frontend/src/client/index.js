import App from '../App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import configureStore from '../common/store/configureStore';
import React from 'react';
import { hydrate } from 'react-dom';
import theme from '../common/theme';

const store = configureStore(window.__PRELOADED_STATE__);

hydrate(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
