import {all} from 'redux-saga/effects'

import watchMoreContributors from './contributors'
import watchPages from './pages'
import watchRepo from './repo'
import watchCounts from './counts'

export default function * rootSaga () {
  yield all([
    watchMoreContributors(),
    watchPages(),
    watchRepo(),
    watchCounts()
  ])
}
