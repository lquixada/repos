import {take, fork} from 'redux-saga/effects';

import {HOME_PAGE_REQUESTED} from '../../actions';
import {loadReposContributorsCount} from '../repos-contributors-count';
import watchLoadHomePage from '../home-page';

describe('Sagas (Home Page)', () => {
  describe('watchLoadHomePage', () => {
    it('watches home page load', () => {
      const gen = watchLoadHomePage();

      expect(gen.next().value).toEqual(take(HOME_PAGE_REQUESTED));
      expect(gen.next().value).toEqual(fork(loadReposContributorsCount));
    });
  });
});

