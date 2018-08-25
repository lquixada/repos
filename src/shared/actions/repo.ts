export const REPO_REQUESTED = 'REPO_REQUESTED'
export const REPO_SUCCEEDED = 'REPO_SUCCEEDED'
export const REPO_FAILED = 'REPO_FAILED'

export const fetchRepo = (payload) => ({
  payload,
  type: REPO_REQUESTED,
})

export const fetchRepoSucceeded = (payload: {owner: string, repoName: string, data: any}) => ({
  payload,
  type: REPO_SUCCEEDED,
})

export const fetchRepoFailed = (payload: {owner: string, repoName: string, error: string}) => ({
  payload,
  type: REPO_FAILED,
})
