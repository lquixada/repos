import {take, fork, put, call} from 'redux-saga/effects'

import {
  REPO_PAGE_REQUESTED,
  fetchReposSucceeded,
  fetchRepoSucceeded,
  fetchContributorsSucceeded,
  fetchPageFailed
} from '../actions'
import {fetchAll} from '../helpers'

export function * loadAll (repoName) {
  try {
    const data = yield call(fetchAll, repoName)

    yield put(fetchRepoSucceeded(repoName, data.repo))
    yield put(fetchReposSucceeded(data.repoCount))
    yield put(fetchContributorsSucceeded(repoName, data.contributors))
  } catch (error) {
    console.info(error)
    yield put(fetchPageFailed(error.stack))
  }
}

export default function * watchLoadRepoPage () {
  while (true) {
    const {payload} = yield take(REPO_PAGE_REQUESTED)

    yield fork(loadAll, payload.repoName)
  }
}
