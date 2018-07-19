import {take, fork, put, call} from 'redux-saga/effects'

import {fetchAll, fetchCounts} from '../helpers'
import {
  PAGE_REQUESTED,
  fetchRepoSucceeded,
  fetchCountsSucceeded,
  fetchContributorsSucceeded,
  fetchPageSucceeded, fetchPageFailed
} from '../actions'

export function * loadOwnerPage ({name, owner}) {
  try {
    const {repoCount} = yield call(fetchCounts, { owner })

    yield put(fetchCountsSucceeded({owner, data: repoCount}))
    yield put(fetchPageSucceeded({name}))
  } catch (error) {
    console.info(error)
    yield put(fetchPageFailed(name, error.stack))
  }
}

export function * loadRepoPage ({name, owner, repoName}) {
  try {
    const data = yield call(fetchAll, { owner, repoName })

    yield put(fetchRepoSucceeded({owner, repoName, data: data.repo}))
    yield put(fetchCountsSucceeded({owner, data: data.repoCount}))
    yield put(fetchContributorsSucceeded({owner, repoName, data: data.contributors}))
    yield put(fetchPageSucceeded({name}))
  } catch (error) {
    console.info(error)
    yield put(fetchPageFailed(name, error.stack))
  }
}

export default function * watchPages () {
  while (true) {
    const {payload} = yield take(PAGE_REQUESTED)

    switch (payload.name) {
      case 'owner':
        yield fork(loadOwnerPage, payload)
        break
      case 'repo':
        yield fork(loadRepoPage, payload)
        break
    }
  }
}
