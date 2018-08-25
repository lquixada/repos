import merge from 'lodash.merge'

import {
  COUNTS_FAILED,
  COUNTS_REQUESTED,
  COUNTS_SUCCEEDED,
} from '../actions'

export default function counts(state = {}, action = {}) {
  const {payload, type}: any = action

  switch (type) {
    case COUNTS_REQUESTED:
      return merge({}, state, {
        [payload.owner]: {
          error: null,
          isLoading: true,
        },
      })

    case COUNTS_SUCCEEDED:
      const data = payload.data
        .map((repo) => [repo.name, repo.count])
        .sort((a, b) => b[1] - a[1])

      return merge({}, state, {
        [payload.owner]: {
          data,
          error: null,
          isLoading: false,
        },
      })

    case COUNTS_FAILED:
      return merge({}, state, {
        [payload.owner]: {
          error: payload.error,
          isLoading: false,
        },
      })

    default:
      return state
  }
}
