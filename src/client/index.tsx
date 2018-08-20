import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config'
import {BrowserRouter} from 'react-router-dom'
import 'regenerator-runtime/runtime'

import store from './store'

const App: any = AppContainer
const renderApp = () => {
  const routes = require('../shared/routes').default

  ReactDOM.hydrate(
    <App>
      <Provider store={store}>
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
      </Provider>
    </App>
    , document.getElementById('app'),
  )
}

renderApp()

if (module.hot) {
  module.hot.accept('../shared/routes', renderApp)
}
