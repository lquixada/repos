import {all} from 'redux-saga/effects'

import watchMoreContributors from './contributors'
import watchPages from './pages'
import watchRepo from './repo'
import watchRepos from './repos'

export default function * rootSaga () {
  yield all([
    watchMoreContributors(),
    watchPages(),
    watchRepo(),
    watchRepos()
  ])
}
