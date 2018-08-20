export const CONTRIBUTORS_REQUESTED = 'CONTRIBUTORS_REQUESTED'
export const CONTRIBUTORS_SUCCEEDED = 'CONTRIBUTORS_SUCCEEDED'
export const CONTRIBUTORS_FAILED = 'CONTRIBUTORS_FAILED'

export const fetchContributors = (payload) => ({
  payload,
  type: CONTRIBUTORS_REQUESTED,
})

export const fetchContributorsSucceeded = (payload) => ({
  payload,
  type: CONTRIBUTORS_SUCCEEDED,
})

export const fetchContributorsFailed = (owner, repoName, error) => ({
  payload: {
    error,
    owner,
    repoName,
  },
  type: CONTRIBUTORS_FAILED,
})
