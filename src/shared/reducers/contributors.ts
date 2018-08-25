import get from 'lodash.get'
import merge from 'lodash.merge'

import {
  CONTRIBUTORS_FAILED, CONTRIBUTORS_REQUESTED, CONTRIBUTORS_SUCCEEDED,
} from '../actions'

const data = (state = [], action) => {
  const {payload} = action
  return state.concat(payload.data.data)
}

export default function contributors(state = {}, action = {}) {
  const {payload, type}: any = action

  switch (type) {
    case CONTRIBUTORS_REQUESTED:
      return merge({}, state, {
        [payload.owner]: {
          [payload.repoName]: {
            error: null,
            isLoading: true,
          },
        },
      })

    case CONTRIBUTORS_SUCCEEDED:
      return merge({}, state, {
        [payload.owner]: {
          [payload.repoName]: {
            data: data(get(state, `${payload.owner}.${payload.repoName}.data`), action),
            error: null,
            isLoading: false,
            nextPage: payload.data.nextPage,
          },
        },
      })

    case CONTRIBUTORS_FAILED:
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
