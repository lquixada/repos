import React from 'react'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config'
import {BrowserRouter} from 'react-router-dom'

import routes from '../shared/routes'
import store from './store'

const App: any = AppContainer

export default () => (
  <App>
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  </App>
)
