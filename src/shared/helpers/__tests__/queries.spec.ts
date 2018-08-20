import createMockClient from '../../../__tests__/client'
import {fetchContributors, fetchCounts, fetchRepo} from '../queries'

import * as helpers from '../client'

describe('Helpers (Queries)', () => {
  beforeEach(() => {
    jest.spyOn(helpers, 'getClient')
      .mockReturnValue(createMockClient())
  })

  describe('fetchContributors', () => {
    it('returns contributors from a repo', async () => {
      const data = await fetchContributors({owner: 'owner1', repoName: 'some-repo', page: 1})
      expect(data).toMatchSnapshot()
    })
  })

  describe('fetchRepo', () => {
    it('returns data from a repo', async () => {
      const data = await fetchRepo({owner: 'owner1', repoName: 'some-repo'})
      expect(data).toMatchSnapshot()
    })
  })

  describe('fetchCounts', () => {
    it('returns counts from an organization', async () => {
      const data = await fetchCounts({owner: 'owner1'})
      expect(data).toMatchSnapshot()
    })
  })
})
