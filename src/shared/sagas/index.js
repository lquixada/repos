import {all} from 'redux-saga/effects';

import rootContributorsSaga from './contributors';
import watchRepo from './repo';
import watchRepos from './repos';

export default function* rootSaga() {
  yield all([
    rootContributorsSaga(),
    watchRepo(),
    watchRepos()
  ]);
}
