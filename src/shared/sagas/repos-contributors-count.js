/* eslint-disable max-statements */
import {call, put, take, fork} from 'redux-saga/effects'

import {
  REPOS_CONTRIBUTORS_COUNT_REQUESTED,
  fetchReposContributorsCountSucceeded,
  fetchReposContributorsCountFailed
} from '../actions'
import {fetchRepos} from '../helpers'

/* Loaders */

export function * loadReposContributorsCount () {
  try {
    const data = yield call(fetchRepos)

    yield put(fetchReposContributorsCountSucceeded(data))
  } catch (error) {
    console.info(error)
    yield put(fetchReposContributorsCountFailed(error.stack))
  }
}

/* Watchers */

export default function * watchReposContributorsCount () {
  while (true) {
    yield take(REPOS_CONTRIBUTORS_COUNT_REQUESTED)

    yield fork(loadReposContributorsCount)
  }
}
