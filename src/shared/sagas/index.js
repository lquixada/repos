import {call, put, takeEvery} from 'redux-saga/effects';

import {REPOS_SUCCEEDED, REPOS_FAILED, REPOS_REQUESTED} from '../actions';
import {fetchRepos} from '../helpers';

export function* fetchData(action) {
  try {
    const data = yield call(fetchRepos, action.payload.url);
    yield put({type: REPOS_SUCCEEDED, data});
  } catch (error) {
    yield put({type: REPOS_FAILED, error});
  }
}

export default function* root() {
  yield takeEvery(REPOS_REQUESTED, fetchData);
}
