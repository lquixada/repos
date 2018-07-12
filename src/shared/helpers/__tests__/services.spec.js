import nock from 'nock'
import {fetchContributors, fetchRepo, fetchRepos} from '../services'

const port = process.env.API_PORT

describe('Helpers (Services)', () => {
  describe('fetchContributors', () => {
    let contributors

    beforeEach(() => {
      contributors = [{
        id: 1,
        login: 'user1'
      }]
      const data = {
        nextPage: 2,
        data: contributors
      }

      nock(`http://localhost:${port}`)
        .defaultReplyHeaders({
          'Link': '<http://repos/?page=2>; rel="next", '
        })
        .get('/api/some-repo/contributors')
        .query(true)
        .reply(200, data)
    })

    afterEach(() => {
      nock.cleanAll()
    })

    it('returns contributors from a repo', async () => {
      const data = await fetchContributors('some-repo')

      expect(data.data).toEqual(contributors)
      expect(data.nextPage).toBe(2)
    })

    it('returns contributors from a repo', async () => {
      const data = await fetchContributors('some-repo')

      expect(data.data).toEqual(contributors)
      expect(data.nextPage).toBe(2)
    })
  })

  describe('fetchRepo', () => {
    afterEach(() => {
      nock.cleanAll()
    })

    it('returns data from a repo', async () => {
      const data = {
        id: 1,
        name: 'repo1'
      }

      nock(`http://localhost:${port}`)
        .get('/api/some-repo')
        .query(true)
        .reply(200, data)

      const {json} = await fetchRepo('some-repo')
      expect(json).toEqual(data)
    })
  })

  describe('fetchRepos', () => {
    let repos

    beforeEach(() => {
      repos = [{
        id: 1,
        name: 'repo1'
      }]

      nock(`http://localhost:${port}`)
        .get('/api/repos')
        .query(true)
        .reply(200, repos)
    })

    afterEach(() => {
      nock.cleanAll()
    })

    it('returns repos from an organization', async () => {
      const data = await fetchRepos()
      expect(data).toEqual(repos)
    })
  })
})
