export const REPO_REQUESTED = 'REPO_REQUESTED'
export const REPO_SUCCEEDED = 'REPO_SUCCEEDED'
export const REPO_FAILED = 'REPO_FAILED'

export const fetchRepo = (repoName) => ({
  type: REPO_REQUESTED,
  payload: {
    repoName
  }
})

export const fetchRepoSucceeded = (repoName, data) => ({
  type: REPO_SUCCEEDED,
  payload: {
    repoName,
    data
  }
})

export const fetchRepoFailed = (repoName, error) => ({
  type: REPO_FAILED,
  payload: {
    repoName,
    error
  }
})
