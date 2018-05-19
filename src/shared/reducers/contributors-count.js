import {CONTRIBUTORS_COUNT_SUCCEEDED} from '../actions';

const normalize = (counts) => {
  return counts.reduce((memo, [repoName, count]) => {
    memo[repoName] = count;
    return memo;
  }, {});
};

export default function contributorsCount(state = {}, action) {
  const {payload, type} = action;

  switch (type) {
    case CONTRIBUTORS_COUNT_SUCCEEDED:
      return normalize(payload.data);
    default:
      return state;
  }
}
