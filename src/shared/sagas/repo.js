import {call, put, take, fork} from 'redux-saga/effects';

import {
  REPO_REQUESTED,
  fetchRepoSucceeded, fetchRepoFailed
} from '../actions';
import {fetchRepo} from '../helpers';

function* loadRepo(repoName) {
  try {
    const data = yield call(fetchRepo, repoName);
    yield put(fetchRepoSucceeded(repoName, data));
  } catch (error) {
    console.error(error);
    yield put(fetchRepoFailed(repoName, error.stack));
  }
}

export default function* watchRepo() {
  while (true) {
    const {payload} = yield take(REPO_REQUESTED);

    yield fork(loadRepo, payload.repoName);
  }
}
