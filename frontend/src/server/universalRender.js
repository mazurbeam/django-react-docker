import React from 'react';
import { Provider } from 'react-redux';
// import { SheetsRegistry } from 'react-jss/lib/jss';
import { StaticRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { Helmet } from 'react-helmet';
import configureStore from '../common/store/configureStore';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import App from '../App';
import { Frontload, frontloadServerRender } from 'react-frontload';

import theme from '../common/theme';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const context = {};

export function handleRender(req, res) {
  const counter = parseInt(10) || 0;
  // Compile an initial state
  const auth = {
    access: undefined,
    refresh: undefined,
    errors: {}
  };
  const preloadedState = { counter, auth };

  // Create a new Redux store instance
  const { store, history } = configureStore();
  const helmet = Helmet.renderStatic();

  // Grab the initial state from our Redux store
  const finalState = store.getState();
  // Create a sheetsRegistry instance.
  const sheet = new ServerStyleSheet();
  // const markup = renderToString(sheet.collectStyles(<App />));
  // Render the component to a string.
  const html = renderToString(
    sheet.collectStyles(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App history={history} />
          </StaticRouter>
        </Provider>
      </ThemeProvider>
    )
  );

  // Grab the CSS from our sheetsRegistry.
  const styleTags = sheet.getStyleTags();

  // Send the rendered page back to the client.
  res.send(renderFullPage(html, styleTags, helmet, finalState));
}

function renderFullPage(markup, styleTags, helmet, finalState) {
  return `<!doctype html>
    <html lang="en" ${helmet.htmlAttributes.toString()}>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${
        assets.client.css
          ? `<link rel="stylesheet" href="${assets.client.css}">`
          : ''
      }    
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet='utf-8' />
      <title>Razzle Redux Example</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ${
        process.env.NODE_ENV === 'production'
          ? `<script src="${assets.client.js}" defer></script>`
          : `<script src="${assets.client.js}" defer crossorigin></script>`
      }
      ${styleTags}
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      <div id="root">${markup}</div>
      
      <script>
        window.__PRELOADED_STATE__ = ${serialize(finalState)}
      </script>
    </body>
  </html>`;
}
