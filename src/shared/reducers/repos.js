import {REPOS_SUCCEEDED} from '../actions';

const normalize = (repos) => {
  return repos.reduce((memo, repo) => {
    memo[repo.name] = repo;
    return memo;
  }, {});
};

export default function repos(state = {}, action) {
  switch (action.type) {
    case REPOS_SUCCEEDED:
      return normalize(action.data);
    default:
      return state;
  }
}
