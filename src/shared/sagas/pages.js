import {take, fork, put, call} from 'redux-saga/effects'

import {fetchAll, fetchCounts} from '../helpers'
import {
  PAGE_REQUESTED,
  fetchRepoSucceeded,
  fetchCountsSucceeded,
  fetchContributorsSucceeded,
  fetchPageSucceeded, fetchPageFailed
} from '../actions'

export function * loadRepoPage ({name, owner, repoName}) {
  try {
    let data

    if (repoName) {
      data = yield call(fetchAll, { owner, repoName })

      yield put(fetchRepoSucceeded({owner, repoName, data: data.repo}))
      yield put(fetchContributorsSucceeded({owner, repoName, data: data.repo.contributors}))
    } else {
      data = yield call(fetchCounts, { owner })
    }

    yield put(fetchCountsSucceeded({owner, data: data.counts}))
    yield put(fetchPageSucceeded({name}))
  } catch (error) {
    console.info(error)
    yield put(fetchPageFailed(name, error.stack))
  }
}

export default function * watchPages () {
  while (true) {
    const {payload} = yield take(PAGE_REQUESTED)

    if (payload.name === 'repo') {
      yield fork(loadRepoPage, payload)
    }
  }
}
