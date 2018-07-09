import {call, put, take, fork} from 'redux-saga/effects'

import {REPOS_REQUESTED, fetchReposSucceeded, fetchReposFailed} from '../actions'
import {fetchRepos} from '../helpers'

/* Loaders */

export function * loadRepos () {
  try {
    const data = yield call(fetchRepos)

    yield put(fetchReposSucceeded(data))
  } catch (error) {
    console.info(error)
    yield put(fetchReposFailed(error.stack))
  }
}

/* Watchers */

export default function * watchRepos () {
  while (true) {
    yield take(REPOS_REQUESTED)
    yield fork(loadRepos)
  }
}
