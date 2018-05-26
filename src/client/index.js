import './babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes, matchRoutes} from 'react-router-config';
import {AppContainer} from 'react-hot-loader';

import {trigger} from '../shared/helpers';
import routes from '../shared/routes'; // eslint-disable-line no-unused-vars

import store from './store';

const matchs = matchRoutes(routes, window.location.pathname);

const renderApp = () => {
  const routes = require('../shared/routes').default;

  ReactDOM.hydrate(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
      </Provider>
    </AppContainer>
    , document.getElementById('app')
  );
};

// Take over if server is not capable of providing the initial state
if (!window.__INITIAL_STATE__) {
  store.runnedSagas.toPromise().then(renderApp);
  trigger('fetch', matchs, store.dispatch);
} else {
  renderApp();
}

if (module.hot) {
  module.hot.accept('../shared/routes', renderApp);
}
