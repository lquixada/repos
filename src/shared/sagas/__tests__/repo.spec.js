import {put, call, take, fork} from 'redux-saga/effects';
import {fetchRepo} from '../../helpers';
import {fetchRepoSucceeded, fetchRepoFailed, REPO_REQUESTED} from '../../actions';
import watchRepo, {loadRepo} from '../repo';

describe('Sagas (Repo)', () => {
  let data;
  let error;
  let repoName;

  beforeEach(() => {
    data = {key: 'value'};
    error = {stack: 'file.js:1:2'};
    repoName = 'repo1';
  });

  describe('watchRepo', () => {
    it('watches repo', () => {
      const action = {payload: {repoName}};
      const gen = watchRepo();

      expect(gen.next().value).toEqual(take(REPO_REQUESTED));
      expect(gen.next(action).value).toEqual(fork(loadRepo, repoName));
    });
  });

  describe('loadRepo', () => {
    it('loads repo', () => {
      const gen = loadRepo(repoName);

      expect(gen.next().value).toEqual(call(fetchRepo, repoName));
      expect(gen.next(data).value).toEqual(put(fetchRepoSucceeded(repoName, data)));
      expect(gen.next()).toEqual({done: true, value: undefined});
    });

    it('handle error', () => {
      const gen = loadRepo(repoName);

      expect(gen.next().value).toEqual(call(fetchRepo, repoName));
      expect(gen.throw(error).value).toEqual(put(fetchRepoFailed(repoName, error.stack)));
      expect(gen.next()).toEqual({done: true, value: undefined});
    });
  });
});

