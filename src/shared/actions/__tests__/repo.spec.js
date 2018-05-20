import {isFSA} from 'flux-standard-action';

import {fetchRepo, fetchRepoSucceeded, fetchRepoFailed} from '../repo';

describe('Actions (Repo)', () => {
  it('fetchRepo is FSA-compliant', () => {
    expect(isFSA(fetchRepo('some-repo'))).toBe(true);
  });

  it('fetchRepoSucceeded is FSA-compliant', () => {
    const data = {};
    expect(isFSA(fetchRepoSucceeded('some-repo', data))).toBe(true);
  });

  it('fetchRepoFailed is FSA-compliant', () => {
    const error = {};
    expect(isFSA(fetchRepoFailed('some-repo', error))).toBe(true);
  });
});
