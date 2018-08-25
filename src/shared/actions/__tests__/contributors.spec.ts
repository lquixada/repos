import {isFSA} from 'flux-standard-action'

import {
  fetchContributors, fetchContributorsFailed, fetchContributorsSucceeded,
} from '../contributors'

describe('Actions (Contributors)', () => {
  describe('Contributors', () => {
    it('fetchContributors is FSA-compliant', () => {
      expect(isFSA(fetchContributors('some-repo'))).toBe(true)
    })

    it('fetchContributorsSucceeded is FSA-compliant', () => {
      expect(isFSA(fetchContributorsSucceeded({
        data: {},
        owner: 'some-owner',
        repoName: 'some-repo',
      }))).toBe(true)
    })

    it('fetchContributorsFailed is FSA-compliant', () => {
      expect(isFSA(fetchContributorsFailed({
        error: 'some-error',
        owner: 'some-owner',
        repoName: 'some-repo',
      }))).toBe(true)
    })
  })
})
