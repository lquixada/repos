/* eslint-disable complexity */
import {fromJS, List, Map} from 'immutable'

import {
  CONTRIBUTORS_FAILED, CONTRIBUTORS_REQUESTED, CONTRIBUTORS_SUCCEEDED,
} from '../actions'

const data = (state = List(), action) => {
  const {payload} = action
  return state.concat(fromJS(payload.data.data))
}

export default function contributors(state = Map(), action = {}) {
  const {payload, type}: any = action

  switch (type) {
    case CONTRIBUTORS_REQUESTED:
      return state.mergeDeep({
        [payload.owner]: {
          [payload.repoName]: {
            error: null,
            isLoading: true,
          },
        },
      })

    case CONTRIBUTORS_SUCCEEDED:
      return state.mergeDeep({
        [payload.owner]: {
          [payload.repoName]: {
            data: data(state.getIn([payload.owner, payload.repoName, 'data']), action),
            error: null,
            isLoading: false,
            nextPage: payload.data.nextPage,
          },
        },
      })

    case CONTRIBUTORS_FAILED:
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
