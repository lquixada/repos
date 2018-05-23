import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import {AppContainer} from 'react-hot-loader';

import {App} from '../shared/components/app';
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

renderApp();

if (module.hot) {
  module.hot.accept('../shared/routes', renderApp);
}
