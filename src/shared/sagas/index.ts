import {all} from 'redux-saga/effects'

import watchContributors from './contributors'
import watchCounts from './counts'
import watchPages from './pages'
import watchRepo from './repo'

export default function * rootSaga() {
  yield all([
    watchContributors(),
    watchPages(),
    watchRepo(),
    watchCounts(),
  ])
}
