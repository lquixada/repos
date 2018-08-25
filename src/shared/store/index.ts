import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from '../reducers'
import sagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const configureStore = (state = {}, middlewares: any[] = [], devTools = (f) => f) => {
  middlewares = middlewares.concat([sagaMiddleware])
  const enhancer: any = compose(applyMiddleware(...middlewares), devTools)
  const store = createStore(reducers, state, enhancer) as any
  store.runnedSagas = sagaMiddleware.run(sagas)
  return store
}

export default configureStore
