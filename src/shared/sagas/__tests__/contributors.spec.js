import {put, call, take, fork} from 'redux-saga/effects';
import {fetchContributors, fetchMoreContributors} from '../../helpers';
import {
  CONTRIBUTORS_REQUESTED, MORE_CONTRIBUTORS_REQUESTED,
  fetchContributorsSucceeded, fetchContributorsFailed,
  fetchMoreContributorsSucceeded, fetchMoreContributorsFailed
} from '../../actions';
import {
  loadContributors, loadMoreContributors, watchContributors, watchMoreContributors
} from '../contributors';

describe('Sagas (Contributors)', () => {
  let data;
  let error;
  let repoName;

  beforeEach(() => {
    data = {key: 'value'};
    error = {stack: 'file.js:1:2'};
    repoName = 'facebook-repos';
  });

  describe('First Contributors', () => {
    describe('watchContributors', () => {
      it('watches repo', () => {
        const action = {payload: {repoName}};
        const gen = watchContributors();

        expect(gen.next().value).toEqual(take(CONTRIBUTORS_REQUESTED));
        expect(gen.next(action).value).toEqual(fork(loadContributors, repoName));
      });
    });

    describe('loadContributors', () => {
      it('loads contributors', () => {
        const gen = loadContributors(repoName);

        expect(gen.next().value).toEqual(call(fetchContributors, repoName));
        expect(gen.next(data).value).toEqual(put(fetchContributorsSucceeded(repoName, data)));
        expect(gen.next()).toEqual({done: true, value: undefined});
      });

      it('handle error', () => {
        const gen = loadContributors(repoName);

        expect(gen.next().value).toEqual(call(fetchContributors, repoName));
        expect(gen.throw(error).value).toEqual(put(fetchContributorsFailed(repoName, error.stack)));
        expect(gen.next()).toEqual({done: true, value: undefined});
      });
    });
  });

  describe('More Contributors', () => {
    let nextUrl;
    let url;

    beforeEach(() => {
      nextUrl = 'http://next-url/';
      url = 'http://facebook-repos/';
    });

    describe('watchMoreContributors', () => {
      it('watches repo', () => {
        const action = {payload: {repoName, nextUrl}};
        const gen = watchMoreContributors();

        expect(gen.next().value).toEqual(take(MORE_CONTRIBUTORS_REQUESTED));
        expect(gen.next(action).value).toEqual(fork(loadMoreContributors, repoName, nextUrl));
      });
    });

    describe('loadMoreContributors', () => {
      it('loads more contributors', () => {
        const gen = loadMoreContributors(repoName, url);

        expect(gen.next().value).toEqual(call(fetchMoreContributors, url));
        expect(gen.next(data).value).toEqual(put(fetchMoreContributorsSucceeded(repoName, data)));
        expect(gen.next()).toEqual({done: true, value: undefined});
      });

      it('handle error', () => {
        const gen = loadMoreContributors(repoName, url);

        expect(gen.next().value).toEqual(call(fetchMoreContributors, url));
        expect(gen.throw(error).value).toEqual(put(fetchMoreContributorsFailed(repoName, error.stack)));
        expect(gen.next()).toEqual({done: true, value: undefined});
      });
    });
  });
});

