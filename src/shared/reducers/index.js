import {combineReducers} from 'redux';

import contributors from './contributors';
import contributorsCount from './contributors-count';
import repo from './repo';
import repos from './repos';

export default combineReducers({
  contributors,
  contributorsCount,
  repo,
  repos,
});
