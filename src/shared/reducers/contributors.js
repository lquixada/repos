/* eslint-disable complexity */
import {Map, List, fromJS} from 'immutable'

import {
  CONTRIBUTORS_SUCCEEDED, CONTRIBUTORS_FAILED, CONTRIBUTORS_REQUESTED,
  MORE_CONTRIBUTORS_SUCCEEDED, MORE_CONTRIBUTORS_FAILED, MORE_CONTRIBUTORS_REQUESTED
} from '../actions'

const data = (state = List(), action) => {
  const {payload, type} = action

  switch (type) {
    case CONTRIBUTORS_SUCCEEDED:
    case MORE_CONTRIBUTORS_SUCCEEDED:
      return state.concat(fromJS(payload.data.data))
    default:
      return state
  }
}

export default function contributors (state = Map(), action = {}) {
  const {payload, type} = action

  switch (type) {
    case CONTRIBUTORS_REQUESTED:
    case MORE_CONTRIBUTORS_REQUESTED:
      return state.mergeDeep({
        [payload.owner]: {
          [payload.repoName]: {
            isLoading: true,
            error: null
          }
        }
      })

    case CONTRIBUTORS_SUCCEEDED:
    case MORE_CONTRIBUTORS_SUCCEEDED:
      return state.mergeDeep({
        [payload.owner]: {
          [payload.repoName]: {
            data: data(state.getIn([payload.owner, payload.repoName, 'data']), action),
            nextPage: payload.data.nextPage,
            isLoading: false,
            error: null
          }
        }
      })

    case CONTRIBUTORS_FAILED:
    case MORE_CONTRIBUTORS_FAILED:
      return state.mergeDeep({
        [payload.owner]: {
          [payload.repoName]: {
            isLoading: false,
            error: payload.error
          }
        }
      })

    default:
      return state
  }
}
