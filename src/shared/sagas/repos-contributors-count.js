/* eslint-disable max-statements */
import {call, put, take, all} from 'redux-saga/effects';

import {
  REPOS_CONTRIBUTORS_COUNT_REQUESTED,
  fetchReposContributorsCountSucceeded,
  fetchReposContributorsCountFailed
} from '../actions';
import {fetchRepos, fetchContributorsCount, totalContributorsDesc} from '../helpers';

export default function* watchReposContributorsCount() {
  while (true) {
    yield take(REPOS_CONTRIBUTORS_COUNT_REQUESTED);

    try {
      let repos = yield call(fetchRepos);
      // Restricting repos temporarily to prevent api rate limit
      repos = repos.slice(0, 3).map((repo) => repo.name);
      const calls = repos.map((repoName) => call(fetchContributorsCount, repoName));
      const contributorsCount = yield all(calls);
      const data = repos.map((repoName, i) => [repoName, contributorsCount[i]]);
      data.sort(totalContributorsDesc);

      yield put(fetchReposContributorsCountSucceeded(data));
    } catch (error) {
      console.error(error);
      yield put(fetchReposContributorsCountFailed(error.stack));
    }
  }
}
