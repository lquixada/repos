import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (state = {}, middlewares = [], devTools = (f) => f) => {
  middlewares = middlewares.concat([sagaMiddleware]);
  middlewares = compose(applyMiddleware(...middlewares), devTools);
  let store = createStore(reducers, state, middlewares);
  store.runnedSagas = sagaMiddleware.run(sagas);
  return store;
};


export default configureStore;
