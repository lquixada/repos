import {combineReducers} from 'redux';

import contributorsCount from './contributors-count';
import repos from './repos';

export default combineReducers({
  contributorsCount,
  repos,
});
