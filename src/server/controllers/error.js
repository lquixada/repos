import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';
import {Helmet} from 'react-helmet';

import {App} from '../../shared/components/app';
import {ErrorPage} from '../../shared/components/error-page';
import template from '../templates/error';

const isProd = process.env.NODE_ENV === 'production';

const errorMiddleware = (err, req, res, next) => {
  const sheet = new ServerStyleSheet();
  const html = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <App> {/* This is wrong :( */}
        <StaticRouter location={req.url} context={{}}>
          <ErrorPage message={isProd? '' : err.stack} />
        </StaticRouter>
      </App>
    </StyleSheetManager>
  );

  res.status(500).send(template({
    helmet: Helmet.renderStatic(),
    styles: sheet.getStyleTags(),
    html,
  }));
};

export default errorMiddleware;
