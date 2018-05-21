import configureStore from '../shared/store';

const state = window.__INITIAL_STATE__;
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default configureStore(state, [], devTools);
