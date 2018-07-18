import {call, put, take, fork, select} from 'redux-saga/effects'

import {
  MORE_CONTRIBUTORS_REQUESTED,
  fetchMoreContributorsSucceeded, fetchMoreContributorsFailed
} from '../actions'
import {fetchContributors} from '../helpers'
import {getNextPage} from '../selectors'

/* Loaders */

export function * loadMoreContributors ({owner, repoName}) {
  try {
    const page = yield select(getNextPage, repoName)
    const {contributors} = yield call(fetchContributors, {
      owner,
      repoName,
      page
    })

    yield put(fetchMoreContributorsSucceeded({owner, repoName, data: contributors}))
  } catch (error) {
    console.info(error)
    yield put(fetchMoreContributorsFailed(repoName, error.stack))
  }
}

/* Watchers */

export default function * watchMoreContributors () {
  while (true) {
    const {payload} = yield take(MORE_CONTRIBUTORS_REQUESTED)

    yield fork(loadMoreContributors, payload)
  }
}
