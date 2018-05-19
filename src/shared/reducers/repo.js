import merge from 'lodash.merge';

import {REPO_SUCCEEDED, REPO_FAILED, REPO_REQUESTED} from '../actions';

export default function repo(state = {}, action) {
  const {payload, type} = action;

  switch (type) {
    case REPO_REQUESTED:
      return merge({}, state, {
        [payload.repoName]: {
          isLoading: true,
          error: null,
        },
      });

    case REPO_SUCCEEDED:
      return merge({}, state, {
        [payload.repoName]: {
          data: payload.data,
          isLoading: false,
          error: null,
        },
      });

    case REPO_FAILED:
      return merge({}, state, {
        [payload.repoName]: {
          isLoading: false,
          error: payload.error,
        },
      });

    default:
      return state;
  }
}
