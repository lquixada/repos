import {routerMiddleware} from 'react-router-redux';

import history from './history';
import configureStore from '../shared/store';

const state = window.__INITIAL_STATE__;
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middlewares = [routerMiddleware(history)];

export default configureStore(state, middlewares, devTools);
