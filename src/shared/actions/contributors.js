export const CONTRIBUTORS_REQUESTED = 'CONTRIBUTORS_REQUESTED';
export const CONTRIBUTORS_SUCCEEDED = 'CONTRIBUTORS_SUCCEEDED';
export const CONTRIBUTORS_FAILED = 'CONTRIBUTORS_FAILED';

export const MORE_CONTRIBUTORS_REQUESTED = 'MORE_CONTRIBUTORS_REQUESTED';
export const MORE_CONTRIBUTORS_SUCCEEDED = 'MORE_CONTRIBUTORS_SUCCEEDED';
export const MORE_CONTRIBUTORS_FAILED = 'MORE_CONTRIBUTORS_FAILED';

export const fetchContributors = (repoName) => ({
  type: CONTRIBUTORS_REQUESTED,
  payload: {
    repoName
  }
});

export const fetchContributorsSucceeded = (repoName, data) => ({
  type: CONTRIBUTORS_SUCCEEDED,
  payload: {
    repoName,
    data
  }
});

export const fetchContributorsFailed = (repoName, error) => ({
  type: CONTRIBUTORS_FAILED,
  payload: {
    repoName,
    error
  }
});

export const fetchMoreContributors = (repoName, nextUrl) => ({
  type: MORE_CONTRIBUTORS_REQUESTED,
  payload: {
    repoName,
    nextUrl
  }
});

export const fetchMoreContributorsSucceeded = (repoName, data) => ({
  type: MORE_CONTRIBUTORS_SUCCEEDED,
  payload: {
    repoName,
    data
  }
});

export const fetchMoreContributorsFailed = (repoName, error) => ({
  type: MORE_CONTRIBUTORS_FAILED,
  payload: {
    repoName,
    error
  }
});
