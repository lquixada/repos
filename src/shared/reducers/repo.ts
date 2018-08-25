import merge from 'lodash.merge'

import {REPO_FAILED, REPO_REQUESTED, REPO_SUCCEEDED} from '../actions'

export default function repo(state = {}, action = {}) {
  const {payload, type}: any = action

  switch (type) {
    case REPO_REQUESTED:
      return merge({}, state, {
        [payload.owner]: {
          [payload.repoName]: {
            error: null,
            isLoading: true,
          },
        },
      })

    case REPO_SUCCEEDED:
      return merge({}, state, {
        [payload.owner]: {
          [payload.repoName]: {
            data: payload.data,
            error: null,
            isLoading: false,
          },
        },
      })

    case REPO_FAILED:
      return merge({}, state, {
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
