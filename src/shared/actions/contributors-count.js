export const CONTRIBUTORS_COUNT_REQUESTED = 'CONTRIBUTORS_COUNT_REQUESTED';
export const CONTRIBUTORS_COUNT_SUCCEEDED = 'CONTRIBUTORS_COUNT_SUCCEEDED';
export const CONTRIBUTORS_COUNT_FAILED = 'CONTRIBUTORS_COUNT_FAILED';

export const fetchContributorsCount = () => ({
  type: CONTRIBUTORS_COUNT_REQUESTED,
});

export const fetchContributorsCountSucceeded = (data) => ({
  type: CONTRIBUTORS_COUNT_SUCCEEDED,
  payload: {
    data
  }
});

export const fetchContributorsCountFailed = (error) => ({
  type: CONTRIBUTORS_COUNT_FAILED,
  payload: {
    error
  }
});
