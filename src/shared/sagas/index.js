import {call, put, take, all} from 'redux-saga/effects';

import {REPOS_SUCCEEDED, REPOS_FAILED, REPOS_REQUESTED} from '../actions';
import {fetchRepos, fetchContributors} from '../helpers';

function totalContributorsDesc(a, b) {
  if (a.totalContributors > b.totalContributors) {
    return -1;
  }
  if (a.totalContributors < b.totalContributors) {
    return 1;
  }
  return 0;
}


export default function* root() {
  while (true) {
    yield take(REPOS_REQUESTED);

    try {
      const repos = yield call(fetchRepos);
      const calls = repos.map((repo) => call(fetchContributors, repo.name));
      const counts = yield all(calls);

      counts.forEach((count, i) => {
        repos[i].totalContributors = count;
      });

      repos.sort(totalContributorsDesc);

      yield put({type: REPOS_SUCCEEDED, data: repos});
    } catch (error) {
      console.log(error);
      yield put({type: REPOS_FAILED, error});
    }
  }
}
