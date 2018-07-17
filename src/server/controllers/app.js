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
import {isEnabled, trigger} from '../../shared/helpers'

export default (req, res, next) => {
  const {url, query} = req
  const ssrEnabled = isEnabled(query.ssr)
  const store = configureStore()

  const renderApp = () => {
    const sheet = new ServerStyleSheet()
    const state = ssrEnabled ? JSON.stringify(store.getState()) : void (0)
    const html = ssrEnabled ? ReactDOMServer.renderToString(
      /* Provides sheet to styled-components */
      <StyleSheetManager sheet={sheet.instance}>
        {/* Provides store to containers */}
        <Provider store={store}>
          {/* Provides router to ReactRouter components (ex: Link) */}
          <StaticRouter location={url} context={{}}>
            {renderRoutes(routes, {version: pkg.version})}
          </StaticRouter>
        </Provider>
      </StyleSheetManager>
    ) : ''

    res.send(template({
      helmet: Helmet.renderStatic(),
      styles: sheet.getStyleTags(),
      state,
      html
    }))
  }

  if (ssrEnabled) {
    store.runnedSagas.toPromise().then(renderApp).catch(next)
    const matchs = matchRoutes(routes, url)
    trigger('fetch', matchs, store.dispatch)
  } else {
    renderApp()
  }
}
