export const REPO_PAGE_REQUESTED = 'REPO_PAGE_REQUESTED'
export const REPO_PAGE_SUCCEEDED = 'REPO_PAGE_SUCCEEDED'
export const REPO_PAGE_FAILED = 'REPO_PAGE_FAILED'

export const loadRepoPage = (repoName) => ({
  type: REPO_PAGE_REQUESTED,
  payload: {
    repoName
  }
})

export const fetchPage = (repoName) => ({
  type: REPO_PAGE_REQUESTED,
  payload: {
    repoName
  }
})

export const fetchPageSucceeded = (repoName) => ({
  type: REPO_PAGE_SUCCEEDED,
  payload: {
    repoName
  }
})

export const fetchPageFailed = (repoName, error) => ({
  type: REPO_PAGE_FAILED,
  payload: {
    repoName,
    error
  }
})
