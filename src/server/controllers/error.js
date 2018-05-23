import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';
import {Helmet} from 'react-helmet';

import {App} from '../../shared/components/app';
import {NotFoundPage} from '../../shared/components/not-found-page';
import template from '../templates/error';

const errorMiddleware = (err, req, res, next) => {
  const sheet = new ServerStyleSheet();
  const html = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <App>
        <StaticRouter location={req.url} context={{}}>
          <NotFoundPage />
        </StaticRouter>
      </App>
    </StyleSheetManager>
  );

  res.set({Error: err.message});
  res.status(404).send(template({
    helmet: Helmet.renderStatic(),
    styles: sheet.getStyleTags(),
    html,
  }));
};

export default errorMiddleware;
