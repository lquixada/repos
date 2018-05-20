import {put, call, all} from 'redux-saga/effects';
import {fetchRepos, fetchContributorsCount} from '../../helpers';
import {fetchReposContributorsCountSucceeded, fetchReposContributorsCountFailed} from '../../actions';
import {loadReposContributorsCount} from '../repos-contributors-count';

describe('Sagas (Repos Contributors Count)', () => {
  describe('loadReposContributorsCount', () => {
    it('loads repos contributors count', () => {
      const repos = [{name: 'repo1'}, {name: 'repo2'}, {name: 'repo3'}];
      const counts = [5, 7, 2];
      const data = [['repo2', 7], ['repo1', 5], ['repo3', 2]];
      const gen = loadReposContributorsCount();

      expect(gen.next().value).toEqual(call(fetchRepos));
      expect(gen.next(repos).value).toEqual(all([
        call(fetchContributorsCount, 'repo1'),
        call(fetchContributorsCount, 'repo2'),
        call(fetchContributorsCount, 'repo3'),
      ]));
      expect(gen.next(counts).value).toEqual(put(fetchReposContributorsCountSucceeded(data)));
      expect(gen.next()).toEqual({done: true, value: undefined});
    });

    it('handle error', () => {
      const error = {stack: 'file.js:1:2'};
      const gen = loadReposContributorsCount();

      expect(gen.next().value).toEqual(call(fetchRepos));
      expect(gen.throw(error).value).toEqual(put(fetchReposContributorsCountFailed(error.stack)));
      expect(gen.next()).toEqual({done: true, value: undefined});
    });
  });
});
