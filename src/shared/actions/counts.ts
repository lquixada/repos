export const COUNTS_REQUESTED = 'COUNTS_REQUESTED'
export const COUNTS_SUCCEEDED = 'COUNTS_SUCCEEDED'
export const COUNTS_FAILED = 'COUNTS_FAILED'

export const fetchCounts = (owner) => ({
  payload: {
    owner,
  },
  type: COUNTS_REQUESTED,
})

export const fetchCountsSucceeded = (payload: {owner: string, data: any}) => ({
  payload,
  type: COUNTS_SUCCEEDED,
})

export const fetchCountsFailed = (payload: {owner: string, error: string}) => ({
  payload,
  type: COUNTS_FAILED,
})
