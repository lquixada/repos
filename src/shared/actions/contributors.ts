export const CONTRIBUTORS_REQUESTED = 'CONTRIBUTORS_REQUESTED'
export const CONTRIBUTORS_SUCCEEDED = 'CONTRIBUTORS_SUCCEEDED'
export const CONTRIBUTORS_FAILED = 'CONTRIBUTORS_FAILED'

export const fetchContributors = (payload) => ({
  payload,
  type: CONTRIBUTORS_REQUESTED,
})

export const fetchContributorsSucceeded = (payload: {owner: string, repoName: string, data: any}) => ({
  payload,
  type: CONTRIBUTORS_SUCCEEDED,
})

export const fetchContributorsFailed = (payload: {owner: string, repoName: string, error: string}) => ({
  payload,
  type: CONTRIBUTORS_FAILED,
})
