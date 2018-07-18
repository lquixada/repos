export const CONTRIBUTORS_REQUESTED = 'CONTRIBUTORS_REQUESTED'
export const CONTRIBUTORS_SUCCEEDED = 'CONTRIBUTORS_SUCCEEDED'
export const CONTRIBUTORS_FAILED = 'CONTRIBUTORS_FAILED'

export const MORE_CONTRIBUTORS_REQUESTED = 'MORE_CONTRIBUTORS_REQUESTED'
export const MORE_CONTRIBUTORS_SUCCEEDED = 'MORE_CONTRIBUTORS_SUCCEEDED'
export const MORE_CONTRIBUTORS_FAILED = 'MORE_CONTRIBUTORS_FAILED'

export const fetchContributors = (payload) => ({
  type: CONTRIBUTORS_REQUESTED,
  payload
})

export const fetchContributorsSucceeded = (payload) => ({
  type: CONTRIBUTORS_SUCCEEDED,
  payload
})

export const fetchContributorsFailed = (repoName, error) => ({
  type: CONTRIBUTORS_FAILED,
  payload: {
    repoName,
    error
  }
})

export const fetchMoreContributors = (payload) => ({
  type: MORE_CONTRIBUTORS_REQUESTED,
  payload
})

export const fetchMoreContributorsSucceeded = (payload) => ({
  type: MORE_CONTRIBUTORS_SUCCEEDED,
  payload
})

export const fetchMoreContributorsFailed = (repoName, error) => ({
  type: MORE_CONTRIBUTORS_FAILED,
  payload: {
    repoName,
    error
  }
})
