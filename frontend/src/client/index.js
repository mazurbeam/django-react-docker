import App from '../App';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';

import configureStore from '../common/store/configureStore';
import React from 'react';
import { hydrate } from 'react-dom';
import theme from '../common/theme';

const { store, history } = configureStore();
const Application = (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </ThemeProvider>
);

hydrate(Application, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('../App', () => {
    hydrate(Application, document.getElementById('root'));
  });
}
