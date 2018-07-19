import {isFSA} from 'flux-standard-action'

import {
  fetchContributors, fetchContributorsSucceeded, fetchContributorsFailed
} from '../contributors'

describe('Actions (Contributors)', () => {
  describe('Contributors', () => {
    it('fetchContributors is FSA-compliant', () => {
      expect(isFSA(fetchContributors('some-repo'))).toBe(true)
    })

    it('fetchContributorsSucceeded is FSA-compliant', () => {
      const data = {}
      expect(isFSA(fetchContributorsSucceeded('some-repo', data))).toBe(true)
    })

    it('fetchContributorsFailed is FSA-compliant', () => {
      const error = {}
      expect(isFSA(fetchContributorsFailed('some-repo', error))).toBe(true)
    })
  })
})
