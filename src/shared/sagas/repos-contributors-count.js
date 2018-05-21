/* eslint-disable max-statements */
import {call, put, take, all, fork} from 'redux-saga/effects';

import {
  REPOS_CONTRIBUTORS_COUNT_REQUESTED,
  fetchReposContributorsCountSucceeded,
  fetchReposContributorsCountFailed
} from '../actions';
import {fetchRepos, fetchContributorsCount} from '../helpers';

/* Loaders */

export function* loadReposContributorsCount() {
  try {
    let repos = yield call(fetchRepos);
    repos = repos.map((repo) => repo.name);

    const calls = repos.map((repoName) => call(fetchContributorsCount, repoName));
    const counts = yield all(calls);

    const data = repos
      .map((repoName, i) => [repoName, counts[i]])
      .sort((a, b) => b[1] - a[1]);

    yield put(fetchReposContributorsCountSucceeded(data));
  } catch (error) {
    console.info(error);
    yield put(fetchReposContributorsCountFailed(error.stack));
  }
}

/* Watchers */

export default function* watchReposContributorsCount() {
  while (true) {
    yield take(REPOS_CONTRIBUTORS_COUNT_REQUESTED);

    yield fork(loadReposContributorsCount);
  }
}
