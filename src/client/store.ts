import configureStore from '../shared/store'
import loaderMiddleware from './middlewares/loader'

const win = (window as any)
const state: any = win.__INITIAL_STATE__
const devTools = win.__REDUX_DEVTOOLS_EXTENSION__ && win.__REDUX_DEVTOOLS_EXTENSION__()

export default configureStore(state, [loaderMiddleware], devTools)
