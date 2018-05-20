import nock from 'nock';

import {extractTotal, fetchRepos, fetchContributorsCount} from '../repos-contributors-count';

describe('Helpers (ReposContributorsCount)', () => {
  describe('extractTotal', () => {
    it('extract total pages from Link header\'s last url', () => {
      const header = `
        <https://api.github.com/repos/?page=2>; rel="next",
        <https://api.github.com/repos/?page=5>; rel="last"
      `;
      expect(extractTotal(header)).toBe(5);
    });

    it('returns zero if there is no last url on Link header', () => {
      const header = `
        <https://api.github.com/repos/?page=2>; rel="prev",
        <https://api.github.com/repos/?page=5>; rel="next"
      `;
      expect(extractTotal(header)).toBe(0);
    });

    it('returns zero if no header is provided', () => {
      expect(extractTotal(undefined)).toBe(0);
      expect(extractTotal(null)).toBe(0);
    });
  });

  describe('fetchRepos', () => {
    let repos;

    beforeEach(() => {
      repos = [{
        id: 1,
        name: 'repo1',
      }];

      nock('https://api.github.com')
        .get('/orgs/facebook/repos')
        .reply(200, repos);
    });

    afterEach(() => {
      nock.cleanAll();
    });

    it('returns repos from an organization', async () => {
      const data = await fetchRepos();
      expect(data).toEqual(repos);
    });
  });

  describe('fetchContributorsCount', () => {
    beforeEach(() => {
      nock('https://api.github.com')
        .defaultReplyHeaders({
          'Link': '<http://facebook-repos/?page=5>; rel="last", '
        })
        .get('/repos/facebook/some-repo/contributors')
        .query({
          page: 1,
          per_page: 1,
        })
        .reply(200);
    });

    afterEach(() => {
      nock.cleanAll();
    });

    it('returns contributors from a repo', async () => {
      const data = await fetchContributorsCount('some-repo');
      expect(data).toEqual(5);
    });
  });
});
