import {CONTRIBUTORS_SUCCEEDED} from '../actions';

const normalize = (contributors) => {
  return contributors.reduce((memo, [repoName, count]) => {
    memo[repoName] = count;
    return memo;
  }, {});
};

export default function contributors(state = {}, action) {
  switch (action.type) {
    case CONTRIBUTORS_SUCCEEDED:
      return normalize(action.data);
    default:
      return state;
  }
}
