import {take, fork} from 'redux-saga/effects';

import {REPO_PAGE_REQUESTED} from '../actions';
import {loadContributors} from './contributors';
import {loadRepo} from './repo';
import {loadReposContributorsCount} from './repos-contributors-count';

export default function* watchLoadRepoPage() {
  while (true) {
    const {payload} = yield take(REPO_PAGE_REQUESTED);

    yield fork(loadReposContributorsCount);
    yield fork(loadRepo, payload.repoName);
    yield fork(loadContributors, payload.repoName);
  }
}
