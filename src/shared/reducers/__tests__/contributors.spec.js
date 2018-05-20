import {
  fetchContributors, fetchContributorsSucceeded, fetchContributorsFailed,
  fetchMoreContributors, fetchMoreContributorsSucceeded, fetchMoreContributorsFailed
} from '../../actions';
import reducer from '../contributors';

describe('Reducers (Contributors)', () => {
  let repoName;
  let contributors;

  beforeEach(() => {
    repoName = 'facebook-repos';
    contributors = [
      {id: 1, login: 'user1'},
      {id: 2, login: 'user2'},
    ];
  });

  it('starts empty', () => {
    expect(reducer()).toEqual({});
  });

  describe('First Contributors', () => {
    it('switches to isLoading state', () => {
      const action = fetchContributors(repoName);
      const state = reducer(undefined, action);

      expect(state[repoName].isLoading).toBe(true);
      expect(state[repoName].error).toBe(null);
    });

    it('sets the repo state', () => {
      const data = {
        next: 'http://nexturl/',
        result: [
          contributors[0]
        ]
      };
      const action = fetchContributorsSucceeded(repoName, data);
      const prevState = {
        [repoName]: {}
      };
      const state = reducer(prevState, action);

      expect(state[repoName].isLoading).toBe(false);
      expect(state[repoName].error).toBe(null);
      expect(state[repoName].data).toEqual([contributors[0]]);
      expect(state[repoName].next).toEqual('http://nexturl/');
    });

    it('sets an error state', () => {
      const action = fetchContributorsFailed(repoName, 'some-error');
      const prevState = {
        [repoName]: {}
      };
      const state = reducer(prevState, action);

      expect(state[repoName].isLoading).toBe(false);
      expect(state[repoName].error).toBe('some-error');
    });
  });

  describe('More Contributors', () => {
    it('switches to isLoading state', () => {
      const action = fetchMoreContributors(repoName);
      const state = reducer(undefined, action);

      expect(state[repoName].isLoading).toBe(true);
      expect(state[repoName].error).toBe(null);
    });

    it('sets the repo state', () => {
      const data = {
        next: 'http://nexturl/',
        result: [
          contributors[1]
        ]
      };
      const action = fetchMoreContributorsSucceeded(repoName, data);
      const prevState = {
        [repoName]: {
          data: [
            contributors[0]
          ]
        }
      };
      const state = reducer(prevState, action);

      expect(state[repoName].isLoading).toBe(false);
      expect(state[repoName].error).toBe(null);
      expect(state[repoName].data).toEqual(contributors);
      expect(state[repoName].next).toEqual('http://nexturl/');
    });

    it('sets an error state', () => {
      const action = fetchMoreContributorsFailed(repoName, 'some-error');
      const prevState = {
        [repoName]: {}
      };
      const state = reducer(prevState, action);

      expect(state[repoName].isLoading).toBe(false);
      expect(state[repoName].error).toBe('some-error');
    });
  });
});
