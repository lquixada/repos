export const PAGE_REQUESTED = 'PAGE_REQUESTED'
export const PAGE_SUCCEEDED = 'PAGE_SUCCEEDED'
export const PAGE_FAILED = 'PAGE_FAILED'

export const fetchPage = (payload) => ({
  type: PAGE_REQUESTED,
  payload
})

export const fetchPageSucceeded = (payload) => ({
  type: PAGE_SUCCEEDED,
  payload
})

export const fetchPageFailed = (name, error) => ({
  type: PAGE_FAILED,
  payload: {
    name,
    error
  }
})
