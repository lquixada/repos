import React from 'react';
import {renderToString} from 'react-dom/server';
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';
import {matchRoutes} from 'react-router-config';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import assets from '../../public/assets.json';
import template from '../template';
import routes from '../../shared/routes';
import configureStore from '../../shared/store';

export default (req, res) => {
  const matchs = matchRoutes(routes, req.url);

  if (matchs.length === 0) {
    return res.status(404).end('Not found');
  }

  const store = configureStore();
  const [{route}] = matchs;
  const state = JSON.stringify(store.getState());
  const sheet = new ServerStyleSheet();
  const content = renderToString(
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
  );

  const styleTags = sheet.getStyleTags();
  res.send(template({state, styleTags, content, assets}));
};
