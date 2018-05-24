import {List, fromJS} from 'immutable';
import {REPOS_CONTRIBUTORS_COUNT_SUCCEEDED} from '../actions';

export default function reposContributorsCount(state = List(), action = {}) {
  const {payload, type} = action;

  switch (type) {
    case REPOS_CONTRIBUTORS_COUNT_SUCCEEDED:
      return fromJS(payload.data);
    default:
      return state;
  }
}
