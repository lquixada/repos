import {Map} from 'immutable'
import {
  COUNTS_REQUESTED,
  COUNTS_SUCCEEDED,
  COUNTS_FAILED
} from '../actions'

export default function counts (state = Map(), action = {}) {
  const {payload, type} = action

  switch (type) {
    case COUNTS_REQUESTED:
      return state.mergeDeep({
        [payload.owner]: {
          isLoading: true,
          error: null
        }
      })

    case COUNTS_SUCCEEDED:
      let data = payload.data
        .map(repo => [repo.name, repo.count])
        .sort((a, b) => b[1] - a[1])

      return state.mergeDeep({
        [payload.owner]: {
          data,
          isLoading: false,
          error: null
        }
      })

    case COUNTS_FAILED:
      return state.mergeDeep({
        [payload.owner]: {
          isLoading: false,
          error: payload.error
        }
      })

    default:
      return state
  }
}
