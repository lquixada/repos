import {call, put, take, all} from 'redux-saga/effects';

import {
  REPOS_SUCCEEDED, REPOS_FAILED, REPOS_REQUESTED,
  CONTRIBUTORS_SUCCEEDED
} from '../actions';
import {fetchRepos, fetchContributors, totalContributorsDesc} from '../helpers';

export default function* root() {
  while (true) {
    yield take(REPOS_REQUESTED);

    try {
      let repos = yield call(fetchRepos);
      // Restricting repos temporarily to prevent api rate limit
      repos = [repos[0]];
      const calls = repos.map((repo) => call(fetchContributors, repo.name));
      const contributors = yield all(calls);

      contributors.forEach((pair, i) => {
        repos[i].contributors_count = pair[1];
      });

      repos.sort(totalContributorsDesc);

      yield put({type: CONTRIBUTORS_SUCCEEDED, data: contributors});
      yield put({type: REPOS_SUCCEEDED, data: repos});
    } catch (error) {
      console.error(error);
      yield put({type: REPOS_FAILED, error: error.stack});
    }
  }
}
