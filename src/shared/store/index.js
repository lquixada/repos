import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'

import {immutifyState} from '../helpers'
import reducers from '../reducers'
import sagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const configureStore = (state = {}, middlewares = [], devTools = (f) => f) => {
  state = immutifyState(state)
  middlewares = middlewares.concat([sagaMiddleware])
  middlewares = compose(applyMiddleware(...middlewares), devTools)
  const store = createStore(reducers, state, middlewares)
  store.runnedSagas = sagaMiddleware.run(sagas)
  return store
}

export default configureStore
