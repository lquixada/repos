import {all} from 'redux-saga/effects';

import rootContributorsSaga from './contributors';
import watchRepos from './repos';

export default function* rootSaga() {
  yield all([
    rootContributorsSaga(),
    watchRepos()
  ]);
}
