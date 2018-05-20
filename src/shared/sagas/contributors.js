import {call, put, take, all, fork} from 'redux-saga/effects';

import {
  CONTRIBUTORS_REQUESTED, MORE_CONTRIBUTORS_REQUESTED,
  fetchMoreContributorsSucceeded, fetchMoreContributorsFailed,
  fetchContributorsSucceeded, fetchContributorsFailed
} from '../actions';
import {fetchContributors, fetchMoreContributors} from '../helpers';

/* Loaders */

function* loadContributors(repoName) {
  try {
    const data = yield call(fetchContributors, repoName);

    yield put(fetchContributorsSucceeded(repoName, data));
  } catch (error) {
    console.error(error);
    yield put(fetchContributorsFailed(repoName, error.stack));
  }
}

function* loadMoreContributors(repoName, nextUrl) {
  try {
    const data = yield call(fetchMoreContributors, nextUrl);

    yield put(fetchMoreContributorsSucceeded(repoName, data));
  } catch (error) {
    console.error(error);
    yield put(fetchMoreContributorsFailed(repoName, error.stack));
  }
}


/* Watchers */

function* watchContributors() {
  while (true) {
    const {payload} = yield take(CONTRIBUTORS_REQUESTED);

    yield fork(loadContributors, payload.repoName);
  }
}

function* watchMoreContributors() {
  while (true) {
    const {payload} = yield take(MORE_CONTRIBUTORS_REQUESTED);

    yield fork(loadMoreContributors, payload.repoName, payload.nextUrl);
  }
}

export default function* rootContributorsSaga() {
  yield all([
    watchContributors(),
    watchMoreContributors()
  ]);
}

