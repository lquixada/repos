import {REPOS_SUCCEEDED} from '../actions';

const normalize = (repos) => {
  return repos.reduce((memo, repo) => {
    memo[repo.name] = repo;
    return memo;
  }, {});
};

export default function repos(state = {}, action) {
  const {payload, type} = action;

  switch (type) {
    case REPOS_SUCCEEDED:
      return normalize(payload.data);
    default:
      return state;
  }
}
