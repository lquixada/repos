import {combineReducers} from 'redux'

import contributors from './contributors'
import counts from './counts'
import repo from './repo'

export default combineReducers({
  contributors,
  counts,
  repo,
})
