import {all} from 'redux-saga/effects';

import watchContributors from './contributors';
import watchRepos from './repos';

export default function* rootSaga() {
  yield all([
    watchContributors(),
    watchRepos()
  ]);
}
