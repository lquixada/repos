import {combineReducers} from 'redux'

import contributors from './contributors'
import repo from './repo'
import repos from './repos'

export default combineReducers({
  contributors,
  repo,
  repos
})
