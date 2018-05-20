import {isFSA} from 'flux-standard-action';

import {loadRepoPage} from '../repo-page';

describe('Actions (Repo Page)', () => {
  it('fetchRepo is FSA-compliant', () => {
    expect(isFSA(loadRepoPage('some-repo'))).toBe(true);
  });
});
