import {Map} from 'immutable'
import {
  REPOS_REQUESTED,
  REPOS_SUCCEEDED,
  REPOS_FAILED
} from '../actions'

export default function repos (state = Map(), action = {}) {
  const {payload, type} = action

  switch (type) {
    case REPOS_REQUESTED:
      return state.mergeDeep({
        [payload.owner]: {
          isLoading: true,
          error: null
        }
      })

    case REPOS_SUCCEEDED:
      let data = payload.data
        .map(repo => [repo.name, repo.count])
        // Sort result
        .sort((a, b) => b[1] - a[1])

      return state.mergeDeep({
        [payload.owner]: {
          data,
          isLoading: false,
          error: null
        }
      })

    case REPOS_FAILED:
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
