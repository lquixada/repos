import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';
import {Helmet} from 'react-helmet';

import {App} from '../../shared/components/app';
import {ErrorPage} from '../../shared/components/error-page';
import template from '../templates/error';

const isProd = process.env.NODE_ENV === 'production';

export default (err, req, res, next) => {
  const sheet = new ServerStyleSheet();
  const html = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <StaticRouter location={req.url} context={{}}>
        <App>
          <ErrorPage message={isProd? '' : err.stack} />
        </App>
      </StaticRouter>
    </StyleSheetManager>
  );

  res.status(500).send(template({
    helmet: Helmet.renderStatic(),
    styles: sheet.getStyleTags(),
    html,
  }));
};
