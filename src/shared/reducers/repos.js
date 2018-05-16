import {REPOS_SUCCEEDED} from '../actions';

export default function repos(state = [], action) {
  switch (action.type) {
    case REPOS_SUCCEEDED:
      return action.data;
    default:
      return state;
  }
}
