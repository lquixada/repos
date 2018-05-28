import {Map} from 'immutable';
import {
  REPOS_CONTRIBUTORS_COUNT_REQUESTED,
  REPOS_CONTRIBUTORS_COUNT_SUCCEEDED,
  REPOS_CONTRIBUTORS_COUNT_FAILED,
} from '../actions';

export default function reposContributorsCount(state = Map(), action = {}) {
  const {payload, type} = action;

  switch (type) {
    case REPOS_CONTRIBUTORS_COUNT_REQUESTED:
      return state.mergeDeep({
        isLoading: true,
        error: null,
      });

    case REPOS_CONTRIBUTORS_COUNT_SUCCEEDED:
      return state.mergeDeep({
        data: payload.data,
        isLoading: false,
        error: null,
      });

    case REPOS_CONTRIBUTORS_COUNT_FAILED:
      return state.mergeDeep({
        isLoading: false,
        error: payload.error,
      });

    default:
      return state;
  }
}
