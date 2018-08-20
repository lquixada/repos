import {Map} from 'immutable'

import {REPO_FAILED, REPO_REQUESTED, REPO_SUCCEEDED} from '../actions'

export default function repo(state = Map(), action = {}) {
  const {payload, type}: any = action

  switch (type) {
    case REPO_REQUESTED:
      return state.mergeDeep({
        [payload.owner]: {
          [payload.repoName]: {
            error: null,
            isLoading: true,
          },
        },
      })

    case REPO_SUCCEEDED:
      return state.mergeDeep({
        [payload.owner]: {
          [payload.repoName]: {
            data: payload.data,
            error: null,
            isLoading: false,
          },
        },
      })

    case REPO_FAILED:
      return state.mergeDeep({
        [payload.owner]: {
          [payload.repoName]: {
            error: payload.error,
            isLoading: false,
          },
        },
      })

    default:
      return state
  }
}
