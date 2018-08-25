import {isFSA} from 'flux-standard-action'

import {fetchRepo, fetchRepoFailed, fetchRepoSucceeded} from '../repo'

describe('Actions (Repo)', () => {
  it('fetchRepo is FSA-compliant', () => {
    expect(isFSA(fetchRepo('some-repo'))).toBe(true)
  })

  it('fetchRepoSucceeded is FSA-compliant', () => {
    expect(isFSA(fetchRepoSucceeded({
      data: {},
      owner: 'some-owner',
      repoName: 'some-repo',
    }))).toBe(true)
  })

  it('fetchRepoFailed is FSA-compliant', () => {
    expect(isFSA(fetchRepoFailed({
      error: 'some-error',
      owner: 'some-owner',
      repoName: 'some-repo',
    }))).toBe(true)
  })
})
