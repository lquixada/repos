/* eslint-disable max-statements */
import {call, put, take, all} from 'redux-saga/effects';

import {
  REPOS_CONTRIBUTORS_COUNT_REQUESTED,
  fetchReposContributorsCountSucceeded,
  fetchReposContributorsCountFailed
} from '../actions';
import {fetchRepos, fetchContributorsCount} from '../helpers';

export default function* watchReposContributorsCount() {
  while (true) {
    yield take(REPOS_CONTRIBUTORS_COUNT_REQUESTED);

    try {
      let repos = yield call(fetchRepos);
      // Restricting repos temporarily to prevent api rate limit
      repos = repos.slice(0, 3).map((repo) => repo.name);

      const calls = repos.map((repoName) => call(fetchContributorsCount, repoName));
      const counts = yield all(calls);

      const data = repos
        .map((repoName, i) => [repoName, counts[i]])
        .sort((a, b) => b[1] - a[1]);

      yield put(fetchReposContributorsCountSucceeded(data));
    } catch (error) {
      console.error(error);
      yield put(fetchReposContributorsCountFailed(error.stack));
    }
  }
}
