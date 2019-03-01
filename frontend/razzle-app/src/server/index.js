import App from '../common/containers/App';
import { Provider } from 'react-redux';
import React from 'react';
import configureStore from '../common/store/configureStore';
import express from 'express';
import { fetchCounter } from '../common/api/counter';
import qs from 'qs';
import { match, RouterContext, StaticRouter } from 'react-router';

import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
// Import the StyledComponents SSR util
import { ServerStyleSheet } from 'styled-components';
import { Provider as ThemeProvider } from 'reakit';
 // import styled-components theme
import theme from '../common/theme';

import isDocker from 'is-docker'
import env from 'get-env'

const path = require('path');


const staticPath = env === 'dev' && !isDocker() ? process.env.RAZZLE_PUBLIC_DIR : path.join(__dirname, '../build/public');


const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server
  .disable('x-powered-by')
  .use(express.static(staticPath))
  .get('/*', (req, res) => {
    fetchCounter(apiResult => {
      // Read the counter from the request, if provided
      const params = qs.parse(req.query);
      const counter = parseInt(params.counter, 10) || apiResult || 0;

      // Compile an initial state
      const preloadedState = { counter };

      // Create a new Redux store instance
      const store = configureStore(preloadedState);
      const context = {};
      // let urlParts = req.url.split('/')
      // let urlClean = urlParts.map(part => !part.includes('?fbclid') );
      // const url = urlClean.join('')
      // Create the server side style sheet
      const sheet = new ServerStyleSheet();
      // Render the component to a string
      const markup = renderToString(
        sheet.collectStyles(
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <StaticRouter location={req.url} context={context}>
                <App />
              </StaticRouter>
            </Provider>
          </ThemeProvider>
        )
      );

      const styleTags = sheet.getStyleTags();

      // Grab the initial state from our Redux store
      const finalState = store.getState();

      res.send(`<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>SGC Events</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>html{background-color: #000000}</style>
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''
        }
          ${
            process.env.NODE_ENV === 'production'
              ? `<script src="${assets.client.js}" defer></script>`
              : `<script src="${assets.client.js}" defer crossorigin></script>`
          }
        <!-- Render the style tags gathered from the components into the DOM -->
        ${styleTags}
    </head>
    <body>
        <div id="root">${markup}</div>
        <script>
          window.__PRELOADED_STATE__ = ${serialize(finalState)}
        </script>
    </body>
</html>`);
    });
  });

export default server;
