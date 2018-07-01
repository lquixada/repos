import {call, put, take, fork} from 'redux-saga/effects'

import {
  REPO_REQUESTED,
  fetchRepoSucceeded, fetchRepoFailed
} from '../actions'
import {fetchRepo} from '../helpers'

/* Loaders */

export function * loadRepo (repoName) {
  try {
    const {json} = yield call(fetchRepo, repoName)
    yield put(fetchRepoSucceeded(repoName, json))
  } catch (error) {
    console.info(error)
    yield put(fetchRepoFailed(repoName, error.stack))
  }
}

/* Watchers */

export default function * watchRepo () {
  while (true) {
    const {payload} = yield take(REPO_REQUESTED)

    yield fork(loadRepo, payload.repoName)
  }
}
