import {Map} from 'immutable'

import {REPO_SUCCEEDED, REPO_FAILED, REPO_REQUESTED} from '../actions'

export default function repo (state = Map(), action = {}) {
  const {payload, type} = action

  switch (type) {
    case REPO_REQUESTED:
      return state.mergeDeep({
        [payload.repoName]: {
          isLoading: true,
          error: null
        }
      })

    case REPO_SUCCEEDED:
      return state.mergeDeep({
        [payload.repoName]: {
          data: payload.data,
          isLoading: false,
          error: null
        }
      })

    case REPO_FAILED:
      return state.mergeDeep({
        [payload.repoName]: {
          isLoading: false,
          error: payload.error
        }
      })

    default:
      return state
  }
}
