import App from '../App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';

import configureStore from '../common/store/configureStore';
import React from 'react';
import { hydrate } from 'react-dom';
import theme from '../common/theme';

const { store, history } = configureStore();

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
  module.hot.accept('../App', () => {
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
  });
}
