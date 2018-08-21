import React from 'react'
import ReactDOM from 'react-dom'
import 'regenerator-runtime/runtime'

import App from './App'

ReactDOM.hydrate(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
