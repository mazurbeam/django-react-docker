import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'
import configureStore from '../common/store/configureStore';
import App from '../common/containers/App';
import theme from '../common/theme'

const store = configureStore(window.__PRELOADED_STATE__);

hydrate(
  <ThemeProvider theme={theme}>
  <Provider store={store}>
    <App />
  </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('../common/containers/App', () => {
    hydrate(
      <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
      </ThemeProvider>,
      document.getElementById('root')
    );
  });
}
