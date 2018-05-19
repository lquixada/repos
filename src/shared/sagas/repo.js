import {call, put, take} from 'redux-saga/effects';

import {
  REPO_REQUESTED,
  fetchRepoSucceeded, fetchRepoFailed
} from '../actions';
import {fetchRepo} from '../helpers';

export default function* watchRepo() {
  while (true) {
    const action = yield take(REPO_REQUESTED);

    try {
      const {repoName} = action.payload;
      const data = yield call(fetchRepo, repoName);
      yield put(fetchRepoSucceeded(repoName, data));
    } catch (error) {
      console.error(error);
      yield put(fetchRepoFailed(repoName, error.stack));
    }
  }
}
