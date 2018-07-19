import {call, put, take, fork} from 'redux-saga/effects'

import {COUNTS_REQUESTED, fetchCountsSucceeded, fetchCountsFailed} from '../actions'
import {fetchCounts} from '../helpers'

/* Loaders */

export function * loadCounts (owner) {
  try {
    const {repoCount} = yield call(fetchCounts, {owner})

    yield put(fetchCountsSucceeded({owner, data: repoCount}))
  } catch (error) {
    console.info(error)
    yield put(fetchCountsFailed(error.stack))
  }
}

/* Watchers */

export default function * watchCounts () {
  while (true) {
    const {payload} = yield take(COUNTS_REQUESTED)
    yield fork(loadCounts, payload.owner)
  }
}
