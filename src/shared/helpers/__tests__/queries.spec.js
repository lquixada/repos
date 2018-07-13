import createMockClient from '../../../__tests__/mocked-client'
import {fetchContributors, fetchRepo, fetchRepos} from '../queries'

import * as helpers from '../client'

describe('Helpers (Queries)', () => {
  beforeEach(() => {
    const client = createMockClient()
    helpers.getClient = () => client
  })

  describe('fetchContributors', () => {
    it('returns contributors from a repo', async () => {
      const data = await fetchContributors('some-repo', 1)
      expect(data).toMatchSnapshot()
    })
  })

  describe('fetchRepo', () => {
    it('returns data from a repo', async () => {
      const data = await fetchRepo('some-repo')
      expect(data).toMatchSnapshot()
    })
  })

  describe('fetchRepos', () => {
    it('returns repos from an organization', async () => {
      const data = await fetchRepos()
      expect(data).toMatchSnapshot()
    })
  })
})
