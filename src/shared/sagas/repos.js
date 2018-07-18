import {call, put, take, fork} from 'redux-saga/effects'

import {REPOS_REQUESTED, fetchReposSucceeded, fetchReposFailed} from '../actions'
import {fetchRepos} from '../helpers'

/* Loaders */

export function * loadRepos (owner) {
  try {
    const {repoCount} = yield call(fetchRepos, { owner })

    yield put(fetchReposSucceeded({owner, data: repoCount}))
  } catch (error) {
    console.info(error)
    yield put(fetchReposFailed(error.stack))
  }
}

/* Watchers */

export default function * watchRepos () {
  while (true) {
    const {payload} = yield take(REPOS_REQUESTED)
    yield fork(loadRepos, payload.owner)
  }
}
