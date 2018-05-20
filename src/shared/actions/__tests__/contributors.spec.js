import {isFSA} from 'flux-standard-action';

import {
  fetchContributors, fetchContributorsSucceeded, fetchContributorsFailed,
  fetchMoreContributors, fetchMoreContributorsSucceeded, fetchMoreContributorsFailed
} from '../contributors';

describe('Actions (Contributors)', () => {
  describe('Contributors', () => {
    it('fetchContributors is FSA-compliant', () => {
      expect(isFSA(fetchContributors('some-repo'))).toBe(true);
    });

    it('fetchContributorsSucceeded is FSA-compliant', () => {
      const data = {};
      expect(isFSA(fetchContributorsSucceeded('some-repo', data))).toBe(true);
    });

    it('fetchContributorsFailed is FSA-compliant', () => {
      const error = {};
      expect(isFSA(fetchContributorsFailed('some-repo', error))).toBe(true);
    });
  });

  describe('More Contributors', () => {
    it('fetchMoreContributors is FSA-compliant', () => {
      const nextUrl = 'https://api.github.com/';
      expect(isFSA(fetchMoreContributors('some-repo', nextUrl))).toBe(true);
    });

    it('fetchMoreContributorsSucceeded is FSA-compliant', () => {
      const data = {};
      expect(isFSA(fetchMoreContributorsSucceeded('some-repo', data))).toBe(true);
    });

    it('fetchMoreContributorsFailed is FSA-compliant', () => {
      const error = {};
      expect(isFSA(fetchMoreContributorsFailed('some-repo', error))).toBe(true);
    });
  });
});
