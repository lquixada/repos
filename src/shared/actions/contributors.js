export const CONTRIBUTORS_REQUESTED = 'CONTRIBUTORS_REQUESTED'
export const CONTRIBUTORS_SUCCEEDED = 'CONTRIBUTORS_SUCCEEDED'
export const CONTRIBUTORS_FAILED = 'CONTRIBUTORS_FAILED'

export const fetchContributors = (payload) => ({
  type: CONTRIBUTORS_REQUESTED,
  payload
})

export const fetchContributorsSucceeded = (payload) => ({
  type: CONTRIBUTORS_SUCCEEDED,
  payload
})

export const fetchContributorsFailed = (owner, repoName, error) => ({
  type: CONTRIBUTORS_FAILED,
  payload: {
    owner,
    repoName,
    error
  }
})
