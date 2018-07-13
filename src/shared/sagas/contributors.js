import {call, put, take, all, fork, select} from 'redux-saga/effects'

import {
  CONTRIBUTORS_REQUESTED, MORE_CONTRIBUTORS_REQUESTED,
  fetchMoreContributorsSucceeded, fetchMoreContributorsFailed,
  fetchContributorsSucceeded, fetchContributorsFailed
} from '../actions'
import {fetchContributors} from '../helpers'
import {getNextPage} from '../selectors'

/* Loaders */

export function * loadContributors (repoName) {
  try {
    const {contributors} = yield call(fetchContributors, repoName, 1)

    yield put(fetchContributorsSucceeded(repoName, contributors))
  } catch (error) {
    console.info(error)
    yield put(fetchContributorsFailed(repoName, error.stack))
  }
}

export function * loadMoreContributors (repoName) {
  try {
    const nextPage = yield select(getNextPage, repoName)
    const {contributors} = yield call(fetchContributors, repoName, nextPage)

    yield put(fetchMoreContributorsSucceeded(repoName, contributors))
  } catch (error) {
    console.info(error)
    yield put(fetchMoreContributorsFailed(repoName, error.stack))
  }
}

/* Watchers */

export function * watchContributors () {
  while (true) {
    const {payload} = yield take(CONTRIBUTORS_REQUESTED)

    yield fork(loadContributors, payload.repoName)
  }
}

export function * watchMoreContributors () {
  while (true) {
    const {payload} = yield take(MORE_CONTRIBUTORS_REQUESTED)

    yield fork(loadMoreContributors, payload.repoName)
  }
}

export default function * rootContributorsSaga () {
  yield all([
    watchContributors(),
    watchMoreContributors()
  ])
}
