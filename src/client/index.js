import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes, matchRoutes} from 'react-router-config';
import {AppContainer} from 'react-hot-loader';
import {END} from 'redux-saga';

import {App} from '../shared/components/app';
import {trigger} from '../shared/helpers';
import routes from '../shared/routes'; // eslint-disable-line no-unused-vars
import store from './store';

const renderApp = () => {
  const routes = require('../shared/routes').default;

  ReactDOM.hydrate(
    <AppContainer>
      <Provider store={store}>
        <App>
          <BrowserRouter>
            {renderRoutes(routes)}
          </BrowserRouter>
        </App>
      </Provider>
    </AppContainer>
    , document.getElementById('app')
  );
};

const matchs = matchRoutes(routes, window.location.pathname);

if (matchs.length === 0) {
  throw new Error(`React Router: Not found ${window.location.pathname}`);
}

const [{match, route}] = matchs;
const {params} = match;

if (!window.__INITIAL_STATE__) {
  store.runnedSagas.toPromise().then(renderApp);
  store.dispatch(trigger('fetch', route.component, params));
  store.dispatch(END);
} else {
  renderApp();
}

if (module.hot) {
  module.hot.accept('../shared/routes', renderApp);
}
