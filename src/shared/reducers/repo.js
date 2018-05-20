import {REPO_SUCCEEDED, REPO_FAILED, REPO_REQUESTED} from '../actions';

export default function repo(state = {}, action) {
  const {payload, type} = action;

  switch (type) {
    case REPO_REQUESTED:
      return Object.assign({}, state, {
        [payload.repoName]: {
          isLoading: true,
          error: null,
        },
      });

    case REPO_SUCCEEDED:
      return Object.assign({}, state, {
        [payload.repoName]: {
          data: payload.data,
          isLoading: false,
          error: null,
        },
      });

    case REPO_FAILED:
      return Object.assign({}, state, {
        [payload.repoName]: {
          isLoading: false,
          error: payload.error,
        },
      });

    default:
      return state;
  }
}
