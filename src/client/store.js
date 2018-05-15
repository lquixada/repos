import {routerMiddleware} from 'react-router-redux';

import history from './history';
import configureStore from '../shared/store';

const state = window.__INITIAL_STATE__;
const devTools = (window.devToolsExtension ? window.devToolsExtension() : (f) => f);
const middlewares = [routerMiddleware(history)];

export default configureStore(state, middlewares, devTools);
