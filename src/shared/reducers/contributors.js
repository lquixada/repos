/* eslint-disable complexity */
import merge from 'lodash.merge';

import {
  CONTRIBUTORS_SUCCEEDED, CONTRIBUTORS_FAILED, CONTRIBUTORS_REQUESTED,
  MORE_CONTRIBUTORS_SUCCEEDED, MORE_CONTRIBUTORS_FAILED, MORE_CONTRIBUTORS_REQUESTED
} from '../actions';

const result = (state = [], action) => {
  const {payload, type} = action;

  switch (type) {
    case CONTRIBUTORS_SUCCEEDED:
      return payload.data;
    case MORE_CONTRIBUTORS_SUCCEEDED:
      return state.result.concat(payload.data);
    default:
      return state;
  }
};

export default function contributors(state = {}, action) {
  const {payload, type, error} = action;

  switch (type) {
    case CONTRIBUTORS_REQUESTED:
    case MORE_CONTRIBUTORS_REQUESTED:
      return merge({}, state, {
        [payload.repoName]: {
          isLoading: true,
          error: null,
        },
      });

    case CONTRIBUTORS_SUCCEEDED:
    case MORE_CONTRIBUTORS_SUCCEEDED:
      return merge({}, state, {
        [payload.repoName]: {
          result: result(state[payload.data], action),
          isLoading: false,
          error: null,
        },
      });

    case CONTRIBUTORS_FAILED:
    case MORE_CONTRIBUTORS_FAILED:
      return merge({}, state, {
        [payload.repoName]: {
          isLoading: false,
          error,
        },
      });

    default:
      return state;
  }
}
