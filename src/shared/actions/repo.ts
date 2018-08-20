export const REPO_REQUESTED = 'REPO_REQUESTED'
export const REPO_SUCCEEDED = 'REPO_SUCCEEDED'
export const REPO_FAILED = 'REPO_FAILED'

export const fetchRepo = (payload) => ({
  payload,
  type: REPO_REQUESTED,
})

export const fetchRepoSucceeded = (payload) => ({
  payload,
  type: REPO_SUCCEEDED,
})

export const fetchRepoFailed = (owner, repoName, error) => ({
  payload: {
    error,
    owner,
    repoName,
  },
  type: REPO_FAILED,
})
