/* eslint-disable max-statements */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';
import {matchRoutes, renderRoutes} from 'react-router-config';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Helmet} from 'react-helmet';

import template from '../templates/app';
import routes from '../../shared/routes';
import {isEnabled, trigger} from '../../shared/helpers';
import store from '../store';

export default (req, res, next) => {
  const ssrEnabled = isEnabled(req.query.ssr);

  const matchs = matchRoutes(routes, req.url);

  if (matchs.length === 0) {
    throw new Error(`React Router: Not found ${req.url}`);
  }

  const renderApp = () => {
    const sheet = new ServerStyleSheet();
    const state = ssrEnabled? JSON.stringify(store.getState()) : void(0);
    const html = ssrEnabled? renderToString(
      /* Provides sheet to styled-components */
      <StyleSheetManager sheet={sheet.instance}>
        {/* Provides store to containers */}
        <Provider store={store}>
          {/* Provides router to ReactRouter components (ex: Link) */}
          <StaticRouter location={req.url} context={{}}>
            {renderRoutes(routes)}
          </StaticRouter>
        </Provider>
      </StyleSheetManager>
    ) : '';

    res.send(template({
      helmet: Helmet.renderStatic(),
      styles: sheet.getStyleTags(),
      state,
      html,
    }));
  };

  if (ssrEnabled) {
    store.runnedSagas.toPromise().then(renderApp).catch(next);
    trigger('fetch', matchs, store.dispatch);
  } else {
    renderApp();
  }
};
