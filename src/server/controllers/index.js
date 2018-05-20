/* eslint-disable max-statements */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';
import {matchRoutes} from 'react-router-config';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {END} from 'redux-saga';

import assets from '../../public/assets.json';
import template from '../template';
import routes from '../../shared/routes';
import {isEnabled} from '../../shared/helpers';
import configureStore from '../../shared/store';

export default (req, res) => {
  const matchs = matchRoutes(routes, req.url);
  const ssrEnabled = isEnabled(req.query.ssr);

  if (matchs.length === 0) {
    return res.status(404).end('Not found');
  }

  const store = configureStore();
  const [{match, route}] = matchs;
  const {params} = match;

  store.runnedSagas.toPromise().then(() => {
    const sheet = new ServerStyleSheet();
    const content = ssrEnabled? renderToString(
      /* Provides sheet to styled-components */
      <StyleSheetManager sheet={sheet.instance}>
        {/* Provides store to containers */}
        <Provider store={store}>
          {/* Provides router to ReactRouter components (ex: Link) */}
          <StaticRouter location={req.url} context={{}}>
            <route.component />
          </StaticRouter>
        </Provider>
      </StyleSheetManager>
    ) : '';

    res.send(template({
      state: JSON.stringify(store.getState()),
      styleTags: sheet.getStyleTags(),
      content,
      assets
    }));
  });

  if (ssrEnabled) {
    store.dispatch(route.initialLoad(params));
  }

  store.dispatch(END);
};
