export const COUNTS_REQUESTED = 'COUNTS_REQUESTED'
export const COUNTS_SUCCEEDED = 'COUNTS_SUCCEEDED'
export const COUNTS_FAILED = 'COUNTS_FAILED'

export const fetchCounts = (owner) => ({
  payload: {
    owner,
  },
  type: COUNTS_REQUESTED,
})

export const fetchCountsSucceeded = (payload) => ({
  payload,
  type: COUNTS_SUCCEEDED,
})

export const fetchCountsFailed = (owner, error) => ({
  payload: {
    error,
    owner,
  },
  type: COUNTS_FAILED,
})
