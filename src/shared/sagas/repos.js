import {call, put, take, all} from 'redux-saga/effects';

import {
  REPOS_REQUESTED,
  fetchReposSucceeded,
  fetchReposFailed,
  fetchContributorsCountSucceeded
} from '../actions';
import {fetchRepos, fetchContributorsCount, totalContributorsDesc} from '../helpers';


export default function* watchRepos() {
  while (true) {
    yield take(REPOS_REQUESTED);

    try {
      let repos = yield call(fetchRepos);
      // Restricting repos temporarily to prevent api rate limit
      repos = repos.slice(0, 3);
      const calls = repos.map((repo) => call(fetchContributorsCount, repo.name));
      const contributors = yield all(calls);

      contributors.forEach((pair, i) => {
        repos[i].contributors_count = pair[1];
      });

      repos.sort(totalContributorsDesc);

      yield put(fetchContributorsCountSucceeded(contributors));
      yield put(fetchReposSucceeded(repos));
    } catch (error) {
      console.error(error);
      yield put(fetchReposFailed(error.stack));
    }
  }
}
