import {call, fork, put, take} from 'redux-saga/effects'

import {
  fetchContributorsSucceeded,
  fetchRepoFailed,
  fetchRepoSucceeded,
  REPO_REQUESTED,
} from '../actions'
import {fetchRepo} from '../helpers'

/* Loaders */

export function * loadRepo({owner, repoName}) {
  try {
    const data = yield call(fetchRepo, {owner, repoName})

    yield put(fetchRepoSucceeded({owner, repoName, data: data.repo}))
    yield put(fetchContributorsSucceeded({owner, repoName, data: data.repo.contributors}))
  } catch (error) {
    console.info(error)
    yield put(fetchRepoFailed(owner, repoName, error.stack))
  }
}

/* Watchers */

export default function * watchRepo() {
  while (true) {
    const {payload} = yield take(REPO_REQUESTED)

    yield fork(loadRepo, payload)
  }
}
