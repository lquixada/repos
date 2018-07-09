import {all} from 'redux-saga/effects'

import watchContributors from './contributors'
import watchLoadHomePage from './home-page'
import watchRepo from './repo'
import watchRepos from './repos'
import watchLoadRepoPage from './repo-page'

export default function * rootSaga () {
  yield all([
    watchContributors(),
    watchLoadHomePage(),
    watchLoadRepoPage(),
    watchRepo(),
    watchRepos()
  ])
}
