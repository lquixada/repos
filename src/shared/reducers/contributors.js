/* eslint-disable complexity */
import {
  CONTRIBUTORS_SUCCEEDED, CONTRIBUTORS_FAILED, CONTRIBUTORS_REQUESTED,
  MORE_CONTRIBUTORS_SUCCEEDED, MORE_CONTRIBUTORS_FAILED, MORE_CONTRIBUTORS_REQUESTED
} from '../actions';

const data = (state = [], action) => {
  const {payload, type} = action;

  switch (type) {
    case CONTRIBUTORS_SUCCEEDED:
      return payload.data.result;
    case MORE_CONTRIBUTORS_SUCCEEDED:
      return state.concat(payload.data.result);
    default:
      return state;
  }
};

export default function contributors(state = {}, action) {
  const {payload, type} = action;

  switch (type) {
    case CONTRIBUTORS_REQUESTED:
    case MORE_CONTRIBUTORS_REQUESTED:
      return Object.assign({}, state, {
        [payload.repoName]: {
          isLoading: true,
          error: null,
        },
      });

    case CONTRIBUTORS_SUCCEEDED:
    case MORE_CONTRIBUTORS_SUCCEEDED:
      return Object.assign({}, state, {
        [payload.repoName]: {
          data: data(state[payload.repoName].data, action),
          next: payload.data.next,
          isLoading: false,
          error: null,
        },
      });

    case CONTRIBUTORS_FAILED:
    case MORE_CONTRIBUTORS_FAILED:
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
