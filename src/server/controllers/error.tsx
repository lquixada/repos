import React from 'react'
import {renderToString} from 'react-dom/server'
import {Helmet} from 'react-helmet'
import {StaticRouter} from 'react-router-dom'
import {ServerStyleSheet, StyleSheetManager} from 'styled-components'

import {App} from '../../shared/components/app'
import {ErrorPage} from '../../shared/components/page/error'
import logger from '../logger'
import template from '../templates/error'

export default (err, req, res, next) => {
  logger.error(err.stack)

  const sheet = new ServerStyleSheet()
  const html = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <StaticRouter location={req.url} context={{}}>
        <App>
          <ErrorPage />
        </App>
      </StaticRouter>
    </StyleSheetManager>,
  )

  res.status(500).send(template({
    helmet: Helmet.renderStatic(),
    html,
    styles: sheet.getStyleTags(),
  }))
}
