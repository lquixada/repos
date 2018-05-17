import {combineReducers} from 'redux';

import contributors from './contributors';
import repos from './repos';

export default combineReducers({
  contributors,
  repos,
});
