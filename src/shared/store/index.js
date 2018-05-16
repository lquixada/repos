import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from '../sagas';
import reducers from '../reducers';
import {immutifyState} from '../helpers';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState = {}, middlewares = [], devTools = (f) => f) => {
  initialState = immutifyState(initialState);
  middlewares = middlewares.concat([sagaMiddleware]);
  middlewares = compose(applyMiddleware(...middlewares), devTools);
  let store = createStore(reducers, initialState, middlewares);
  sagaMiddleware.run(sagas);
  return store;
};


export default configureStore;
