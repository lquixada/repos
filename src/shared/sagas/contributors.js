import {call, put, take, fork, select} from 'redux-saga/effects'

import {
  CONTRIBUTORS_REQUESTED,
  fetchContributorsSucceeded, fetchContributorsFailed
} from '../actions'
import {fetchContributors} from '../helpers'
import {getNextPage} from '../selectors'

/* Loaders */

export function * loadContributors ({owner, repoName}) {
  try {
    const page = yield select(getNextPage, owner, repoName)
    const {contributors} = yield call(fetchContributors, {
      owner,
      repoName,
      page
    })

    yield put(fetchContributorsSucceeded({owner, repoName, data: contributors}))
  } catch (error) {
    console.info(error)
    yield put(fetchContributorsFailed(repoName, error.stack))
  }
}

/* Watchers */

export default function * watchContributors () {
  while (true) {
    const {payload} = yield take(CONTRIBUTORS_REQUESTED)

    yield fork(loadContributors, payload)
  }
}
