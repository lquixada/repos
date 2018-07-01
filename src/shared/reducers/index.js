import {combineReducers} from 'redux'

import contributors from './contributors'
import repo from './repo'
import reposContributorsCount from './repos-contributors-count'

export default combineReducers({
  contributors,
  repo,
  reposContributorsCount
})
