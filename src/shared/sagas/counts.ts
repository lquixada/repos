import {call, fork, put, take} from 'redux-saga/effects'

import {COUNTS_REQUESTED, fetchCountsFailed, fetchCountsSucceeded} from '../actions'
import {fetchCounts} from '../helpers'

/* Loaders */

export function * loadCounts(owner) {
  try {
    const {counts} = yield call(fetchCounts, {owner})

    yield put(fetchCountsSucceeded({owner, data: counts}))
  } catch (error) {
    console.info(error)
    yield put(fetchCountsFailed(owner, error.stack))
  }
}

/* Watchers */

export default function * watchCounts() {
  while (true) {
    const {payload} = yield take(COUNTS_REQUESTED)
    yield fork(loadCounts, payload.owner)
  }
}
