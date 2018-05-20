import 'es6-promise';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {renderRoutes} from 'react-router-config';
import {AppContainer} from 'react-hot-loader';

import routes from '../shared/routes'; // eslint-disable-line no-unused-vars
import store from './store';
import history from './history';

const renderApp = () => {
  const routes = require('../shared/routes').default;

  ReactDOM.hydrate(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {renderRoutes(routes)}
        </ConnectedRouter>
      </Provider>
    </AppContainer>
    , document.getElementById('app')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('../shared/routes', renderApp);
}
