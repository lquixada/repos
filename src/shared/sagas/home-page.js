import {take, fork} from 'redux-saga/effects'

import {HOME_PAGE_REQUESTED} from '../actions'
import {loadRepos} from './repos'

export default function * watchLoadHomePage () {
  while (true) {
    yield take(HOME_PAGE_REQUESTED)
    yield fork(loadRepos)
  }
}
