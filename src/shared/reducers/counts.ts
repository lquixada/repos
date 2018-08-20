import {Map} from 'immutable'
import {
  COUNTS_FAILED,
  COUNTS_REQUESTED,
  COUNTS_SUCCEEDED,
} from '../actions'

export default function counts(state = Map(), action = {}) {
  const {payload, type}: any = action

  switch (type) {
    case COUNTS_REQUESTED:
      return state.mergeDeep({
        [payload.owner]: {
          error: null,
          isLoading: true,
        },
      })

    case COUNTS_SUCCEEDED:
      const data = payload.data
        .map((repo) => [repo.name, repo.count])
        .sort((a, b) => b[1] - a[1])

      return state.mergeDeep({
        [payload.owner]: {
          data,
          error: null,
          isLoading: false,
        },
      })

    case COUNTS_FAILED:
      return state.mergeDeep({
        [payload.owner]: {
          error: payload.error,
          isLoading: false,
        },
      })

    default:
      return state
  }
}
