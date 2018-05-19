import {CONTRIBUTORS_COUNT_SUCCEEDED} from '../actions';

const normalize = (counts) => {
  return counts.reduce((memo, [repoName, count]) => {
    memo[repoName] = count;
    return memo;
  }, {});
};

export default function contributorsCount(state = {}, action) {
  switch (action.type) {
    case CONTRIBUTORS_COUNT_SUCCEEDED:
      return normalize(action.data);
    default:
      return state;
  }
}
