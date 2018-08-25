import {call, fork, put, take} from 'redux-saga/effects'

import {
  fetchContributorsSucceeded,
  fetchCountsSucceeded,
  fetchPageFailed,
  fetchPageSucceeded,
  fetchRepoSucceeded, PAGE_REQUESTED,
} from '../actions'
import {fetchAll, fetchCounts} from '../helpers'

export function * loadRepoPage({name, owner, repoName}: {name: string, owner: string, repoName?: string}) {
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
    yield put(fetchPageFailed({name, error: error.stack}))
  }
}

export default function * watchPages() {
  while (true) {
    const {payload} = yield take(PAGE_REQUESTED)

    if (payload.name === 'repo') {
      yield fork(loadRepoPage, payload)
    }
  }
}
