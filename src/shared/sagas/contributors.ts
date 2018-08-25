import {call, fork, put, select, take} from 'redux-saga/effects'

import {
  CONTRIBUTORS_REQUESTED,
  fetchContributorsFailed, fetchContributorsSucceeded,
} from '../actions'
import {fetchContributors} from '../helpers'
import {getNextPage} from '../selectors'

/* Loaders */

export function * loadContributors({owner, repoName}) {
  try {
    const page = yield select(getNextPage, owner, repoName)
    const data = yield call(fetchContributors, {
      owner,
      page,
      repoName,
    })

    yield put(fetchContributorsSucceeded({owner, repoName, data: data.contributors}))
  } catch (error) {
    console.info(error)
    yield put(fetchContributorsFailed({owner, repoName, error: error.stack}))
  }
}

/* Watchers */

export default function * watchContributors() {
  while (true) {
    const {payload} = yield take(CONTRIBUTORS_REQUESTED)

    yield fork(loadContributors, payload)
  }
}
