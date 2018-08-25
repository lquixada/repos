export const PAGE_REQUESTED = 'PAGE_REQUESTED'
export const PAGE_SUCCEEDED = 'PAGE_SUCCEEDED'
export const PAGE_FAILED = 'PAGE_FAILED'

export const fetchPage = (payload) => ({
  payload,
  type: PAGE_REQUESTED,
})

export const fetchPageSucceeded = (payload: {name: string}) => ({
  payload,
  type: PAGE_SUCCEEDED,
})

export const fetchPageFailed = (payload: {name: string, error: string}) => ({
  payload,
  type: PAGE_FAILED,
})
