import nock from 'nock';
import {extractNext, fetchContributors, fetchMoreContributors} from '../contributors';

describe('Helpers (Contributors)', () => {
  describe('extractNext', () => {
    it('extract the next url from Link header', () => {
      const header = `
        <https://api.github.com/repos/?page=2>; rel="next",
        <https://api.github.com/repos/?page=5>; rel="last"
      `;
      expect(extractNext(header)).toBe('https://api.github.com/repos/?page=2');
    });

    it('returns empty if there is no next url', () => {
      const header = `
        <https://api.github.com/repos/?page=2>; rel="prev",
        <https://api.github.com/repos/?page=5>; rel="last"
      `;
      expect(extractNext(header)).toBe('');
    });

    it('returns empty if no header is provided', () => {
      expect(extractNext(undefined)).toBe('');
      expect(extractNext(null)).toBe('');
    });
  });

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
});
