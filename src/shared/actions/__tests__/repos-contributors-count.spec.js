import {isFSA} from 'flux-standard-action';

import {
  fetchReposContributorsCount,
  fetchReposContributorsCountSucceeded,
  fetchReposContributorsCountFailed
} from '../repos-contributors-count';

describe('Actions (Repos Contributors Count)', () => {
  it('fetchReposContributorsCount is FSA-compliant', () => {
    expect(isFSA(fetchReposContributorsCount('some-repo'))).toBe(true);
  });

  it('fetchReposContributorsCountSucceeded is FSA-compliant', () => {
    const data = {};
    expect(isFSA(fetchReposContributorsCountSucceeded(data))).toBe(true);
  });

  it('fetchReposContributorsCountFailed is FSA-compliant', () => {
    const error = {};
    expect(isFSA(fetchReposContributorsCountFailed(error))).toBe(true);
  });
});
