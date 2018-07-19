export const COUNTS_REQUESTED = 'COUNTS_REQUESTED'
export const COUNTS_SUCCEEDED = 'COUNTS_SUCCEEDED'
export const COUNTS_FAILED = 'COUNTS_FAILED'

export const fetchCounts = (owner) => ({
  type: COUNTS_REQUESTED,
  payload: {
    owner
  }
})

export const fetchCountsSucceeded = (payload) => ({
  type: COUNTS_SUCCEEDED,
  payload
})

export const fetchCountsFailed = (error) => ({
  type: COUNTS_FAILED,
  payload: {
    error
  }
})
