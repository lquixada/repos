import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router-dom';
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';

import {NotFoundPage} from '../../shared/components/not-found-page';
import assets from '../../public/assets.json';
import template from '../templates/error';
import configureStore from '../../shared/store';

const errorMiddleware = (err, req, res, next) => {
  const sheet = new ServerStyleSheet();
  const content = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <Provider store={configureStore()}>
        <StaticRouter location={req.url} context={{}}>
          <NotFoundPage />
        </StaticRouter>
      </Provider>
    </StyleSheetManager>
  );

  res.set({Error: err.message});
  res.status(404).send(template({
    styleTags: sheet.getStyleTags(),
    content,
    assets
  }));
};

export default errorMiddleware;
