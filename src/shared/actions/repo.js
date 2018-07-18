export const REPO_REQUESTED = 'REPO_REQUESTED'
export const REPO_SUCCEEDED = 'REPO_SUCCEEDED'
export const REPO_FAILED = 'REPO_FAILED'

export const fetchRepo = (payload) => ({
  type: REPO_REQUESTED,
  payload
})

export const fetchRepoSucceeded = (payload) => ({
  type: REPO_SUCCEEDED,
  payload
})

export const fetchRepoFailed = (repoName, error) => ({
  type: REPO_FAILED,
  payload: {
    repoName,
    error
  }
})
