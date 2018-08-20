import {isFSA} from 'flux-standard-action'

import {fetchRepo, fetchRepoFailed, fetchRepoSucceeded} from '../repo'

describe('Actions (Repo)', () => {
  it('fetchRepo is FSA-compliant', () => {
    expect(isFSA(fetchRepo('some-repo'))).toBe(true)
  })

  it('fetchRepoSucceeded is FSA-compliant', () => {
    const data = {}
    expect(isFSA(fetchRepoSucceeded(data))).toBe(true)
  })

  it('fetchRepoFailed is FSA-compliant', () => {
    const error = {}
    expect(isFSA(fetchRepoFailed('some-owner', 'some-repo', error))).toBe(true)
  })
})
