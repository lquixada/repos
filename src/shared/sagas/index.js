import {call, put, take, all} from 'redux-saga/effects';

import {REPOS_SUCCEEDED, REPOS_FAILED, REPOS_REQUESTED} from '../actions';
import {fetchRepos, fetchContributors, totalContributorsDesc} from '../helpers';

export default function* root() {
  while (true) {
    yield take(REPOS_REQUESTED);

    try {
      const repos = yield call(fetchRepos);
      const calls = repos.map((repo) => call(fetchContributors, repo.contributors_url));
      const counts = yield all(calls);

      counts.forEach((count, i) => {
        repos[i].contributors_count = count;
      });

      repos.sort(totalContributorsDesc);

      yield put({type: REPOS_SUCCEEDED, data: repos});
    } catch (error) {
      yield put({type: REPOS_FAILED, error});
    }
  }
}
