import {call, put, take, fork} from 'redux-saga/effects'

import {
  REPO_REQUESTED,
  fetchRepoSucceeded,
  fetchRepoFailed,
  fetchContributorsSucceeded
} from '../actions'
import {fetchRepo} from '../helpers'

/* Loaders */

export function * loadRepo ({owner, repoName}) {
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

export default function * watchRepo () {
  while (true) {
    const {payload} = yield take(REPO_REQUESTED)

    yield fork(loadRepo, payload)
  }
}
