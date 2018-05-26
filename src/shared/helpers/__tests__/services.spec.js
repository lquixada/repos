import nock from 'nock';
import {fetchContributors, fetchContributorsCount, fetchMoreContributors, fetchRepo, fetchRepos} from '../services';

describe('Helpers (Services)', () => {
  describe('fetchContributors', () => {
    let contributors;

    beforeEach(() => {
      contributors = [{
        id: 1,
        login: 'user1',
      }];

      nock('https://api.github.com')
        .defaultReplyHeaders({
          'Link': '<http://facebook-repos/?page=2>; rel="next", '
        })
        .get('/repos/facebook/some-repo/contributors')
        .query(true)
        .reply(200, contributors);
    });

    afterEach(() => {
      nock.cleanAll();
    });

    it('returns contributors from a repo', async () => {
      const data = await fetchContributors('some-repo');

      expect(data.result).toEqual(contributors);
      expect(data.next).toBe('http://facebook-repos/?page=2');
    });

    it('returns contributors from a repo', async () => {
      const data = await fetchContributors('some-repo');

      expect(data.result).toEqual(contributors);
      expect(data.next).toBe('http://facebook-repos/?page=2');
    });
  });

  describe('fetchMoreContributors', () => {
    let contributors;

    beforeEach(() => {
      contributors = [{
        id: 1,
        login: 'user1',
      }];

      nock('http://facebook-repos/')
        .defaultReplyHeaders({
          'Link': '<http://facebook-repos/?page=2>; rel="next", '
        })
        .get('/')
        .query(true)
        .reply(200, contributors);
    });

    afterEach(() => {
      nock.cleanAll();
    });

    it('returns contributors from a repo', async () => {
      const data = await fetchMoreContributors('http://facebook-repos/');

      expect(data.result).toEqual(contributors);
      expect(data.next).toBe('http://facebook-repos/?page=2');
    });

    it('returns contributors from a repo', async () => {
      const data = await fetchMoreContributors('http://facebook-repos/');

      expect(data.result).toEqual(contributors);
      expect(data.next).toBe('http://facebook-repos/?page=2');
    });
  });

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

      const {json} = await fetchRepo('some-repo');
      expect(json).toEqual(data);
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
        .query(true)
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
        .query(true)
        .reply(200, {});
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
