export const REPOS_REQUESTED = 'REPOS_REQUESTED'
export const REPOS_SUCCEEDED = 'REPOS_SUCCEEDED'
export const REPOS_FAILED = 'REPOS_FAILED'

export const fetchRepos = (owner) => ({
  type: REPOS_REQUESTED,
  payload: {
    owner
  }
})

export const fetchReposSucceeded = (payload) => ({
  type: REPOS_SUCCEEDED,
  payload
})

export const fetchReposFailed = (error) => ({
  type: REPOS_FAILED,
  payload: {
    error
  }
})
