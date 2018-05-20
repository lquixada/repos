import nock from 'nock';

import {fetchRepo} from '../repo';

describe('Helpers (Repo)', () => {
  describe('fetchRepo', () => {
    afterEach(() => {
      nock.cleanAll();
    });

    it('returns data from a repo', async () => {
      const data = {
        id: 1,
        name: 'repo1',
      };

      nock('https://api.github.com')
        .get('/repos/facebook/some-repo')
        .query(true)
        .reply(200, data);

      const result = await fetchRepo('some-repo');
      expect(result).toEqual(data);
    });
  });
});
