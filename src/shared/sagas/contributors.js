import {call, put, take} from 'redux-saga/effects';

import {
  CONTRIBUTORS_REQUESTED,
  fetchContributorsSucceeded, fetchContributorsFailed
} from '../actions';
import {fetchContributors} from '../helpers';

export default function* watchContributors() {
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
