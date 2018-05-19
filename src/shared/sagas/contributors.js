import {call, put, take, all} from 'redux-saga/effects';

import {
  CONTRIBUTORS_REQUESTED, MORE_CONTRIBUTORS_REQUESTED,
  fetchMoreContributorsSucceeded, fetchMoreContributorsFailed,
  fetchContributorsSucceeded, fetchContributorsFailed
} from '../actions';
import {fetchContributors, fetchMoreContributors} from '../helpers';

function* watchContributors() {
  while (true) {
    const action = yield take(CONTRIBUTORS_REQUESTED);

    try {
      const {repoName} = action.payload;
      const data = yield call(fetchContributors, repoName);

      yield put(fetchContributorsSucceeded(repoName, data));
    } catch (error) {
      console.error(error);
      yield put(fetchContributorsFailed(repoName, error.stack));
    }
  }
}

function* watchMoreContributors() {
  while (true) {
    const action = yield take(MORE_CONTRIBUTORS_REQUESTED);

    try {
      const {repoName, nextUrl} = action.payload;
      const data = yield call(fetchMoreContributors, nextUrl);

      yield put(fetchMoreContributorsSucceeded(repoName, data));
    } catch (error) {
      console.error(error);
      yield put(fetchMoreContributorsFailed(repoName, error.stack));
    }
  }
}

export default function* rootContributorsSaga() {
  yield all([
    watchContributors(),
    watchMoreContributors()
  ]);
}

