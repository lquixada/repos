import {REPOS_SUCCEEDED} from '../actions';

// const normalize = (repos) => repos.reduce((memo, repo) => memo[repo.name] = repo, {});

export default function repos(state = [], action) {
  switch (action.type) {
    case REPOS_SUCCEEDED:
      return action.data;
      // return normalize(action.data);
    default:
      return state;
  }
}
