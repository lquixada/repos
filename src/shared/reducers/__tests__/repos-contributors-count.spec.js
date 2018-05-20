import {fetchReposContributorsCountSucceeded} from '../../actions';
import reducer from '../repos-contributors-count';

describe('Reducers (Repos Contributors Count)', () => {
  it('starts empty', () => {
    expect(reducer()).toEqual([]);
  });

  it('sets the repos contributors count state', () => {
    const data = [['repo1', 2]];
    const action = fetchReposContributorsCountSucceeded(data);
    const state = reducer(undefined, action);

    expect(state).toEqual(data);
  });
});
