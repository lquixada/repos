import {fetchRepo, fetchRepoSucceeded, fetchRepoFailed} from '../../actions';
import reducer from '../repo';

describe('Reducers (Repo)', () => {
  let repoName;

  beforeEach(() => {
    repoName = 'facebook-repos';
  });

  it('starts empty', () => {
    expect(reducer()).toEqual({});
  });

  it('switches to isLoading state', () => {
    const action = fetchRepo(repoName);
    const state = reducer(undefined, action);

    expect(state[repoName].isLoading).toBe(true);
    expect(state[repoName].error).toBe(null);
  });

  it('sets the repo state', () => {
    const data = {
      id: 1,
      name: repoName
    };
    const action = fetchRepoSucceeded(repoName, data);
    const state = reducer(undefined, action);

    expect(state[repoName].isLoading).toBe(false);
    expect(state[repoName].error).toBe(null);
    expect(state[repoName].data).toEqual(data);
  });

  it('sets an error state', () => {
    const action = fetchRepoFailed(repoName, 'some-error');
    const state = reducer(undefined, action);

    expect(state[repoName].isLoading).toBe(false);
    expect(state[repoName].error).toBe('some-error');
  });
});
