import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {ServerStyleSheet, StyleSheetManager} from 'styled-components'
import {matchRoutes, renderRoutes} from 'react-router-config'
import {StaticRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {Helmet} from 'react-helmet'

import pkg from '../../../package.json'
import template from '../templates/app'
import routes from '../../shared/routes'
import configureStore from '../../shared/store'
import {trigger} from '../../shared/helpers'

export const renderApp = (location, store) => {
  const sheet = new ServerStyleSheet()
  const state = JSON.stringify(store.getState())
  const html = ReactDOMServer.renderToString(
    /* Provides sheet to styled-components */
    <StyleSheetManager sheet={sheet.instance}>
      {/* Provides store to containers */}
      <Provider store={store}>
        {/* Provides router to ReactRouter components (ex: Link) */}
        <StaticRouter location={location} context={{}}>
          {renderRoutes(routes, {version: pkg.version})}
        </StaticRouter>
      </Provider>
    </StyleSheetManager>
  )

  return template({
    helmet: Helmet.renderStatic(),
    styles: sheet.getStyleTags(),
    state,
    html
  })
}

export default (req, res, next) => {
  const location = req.url
  const matchs = matchRoutes(routes, location)
  const store = configureStore()

  store.runnedSagas
    .toPromise()
    .then(() => {
      res.set('Cache-Control', 'max-age=3600, s-maxage=86400')
      res.send(renderApp(location, store))
    })
    .catch(next)

  trigger('fetch', matchs, store.dispatch)
}
