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
        isLoading: true,
        error: null
      })

    case REPOS_SUCCEEDED:
      return state.mergeDeep({
        data: payload.data,
        isLoading: false,
        error: null
      })

    case REPOS_FAILED:
      return state.mergeDeep({
        isLoading: false,
        error: payload.error
      })

    default:
      return state
  }
}
