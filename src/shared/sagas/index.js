import {all} from 'redux-saga/effects'

import watchContributors from './contributors'
import watchLoadHomePage from './home-page'
import watchRepo from './repo'
import watchLoadRepoPage from './repo-page'
import watchReposContributorsCount from './repos-contributors-count'

export default function * rootSaga () {
  yield all([
    watchContributors(),
    watchLoadHomePage(),
    watchLoadRepoPage(),
    watchRepo(),
    watchReposContributorsCount()
  ])
}
