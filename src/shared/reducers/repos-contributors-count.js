import {REPOS_CONTRIBUTORS_COUNT_SUCCEEDED} from '../actions';

export default function reposContributorsCount(state = [], action = {}) {
  const {payload, type} = action;

  switch (type) {
    case REPOS_CONTRIBUTORS_COUNT_SUCCEEDED:
      return payload.data;
    default:
      return state;
  }
}
