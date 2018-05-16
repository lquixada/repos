export const REPOS_REQUESTED = 'REPOS_REQUESTED';
export const REPOS_SUCCEEDED = 'REPOS_SUCCEEDED';
export const REPOS_FAILED = 'REPOS_FAILED';

export const fetchRepos = () => ({
  type: REPOS_REQUESTED,
});
