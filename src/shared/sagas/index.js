import {all} from 'redux-saga/effects';

import rootContributorsSaga from './contributors';
import watchRepo from './repo';
import watchReposContributorsCount from './repos-contributors-count';

export default function* rootSaga() {
  yield all([
    rootContributorsSaga(),
    watchRepo(),
    watchReposContributorsCount(),
  ]);
}
