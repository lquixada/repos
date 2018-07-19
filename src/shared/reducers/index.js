import {combineReducers} from 'redux'

import contributors from './contributors'
import repo from './repo'
import counts from './counts'

export default combineReducers({
  contributors,
  repo,
  counts
})
