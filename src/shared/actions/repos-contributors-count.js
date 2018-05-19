export const REPOS_CONTRIBUTORS_COUNT_REQUESTED = 'REPOS_CONTRIBUTORS_COUNT_REQUESTED';
export const REPOS_CONTRIBUTORS_COUNT_SUCCEEDED = 'REPOS_CONTRIBUTORS_COUNT_SUCCEEDED';
export const REPOS_CONTRIBUTORS_COUNT_FAILED = 'REPOS_CONTRIBUTORS_COUNT_FAILED';

export const fetchReposContributorsCount = () => ({
  type: REPOS_CONTRIBUTORS_COUNT_REQUESTED
});

export const fetchReposContributorsCountSucceeded = (data) => ({
  type: REPOS_CONTRIBUTORS_COUNT_SUCCEEDED,
  payload: {
    data
  }
});

export const fetchReposContributorsCountFailed = (error) => ({
  type: REPOS_CONTRIBUTORS_COUNT_FAILED,
  payload: {
    error
  }
});
