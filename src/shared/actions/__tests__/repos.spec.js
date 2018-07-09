import {isFSA} from 'flux-standard-action'

import {fetchRepos, fetchReposSucceeded, fetchReposFailed} from '../repos'

describe('Actions (Repos)', () => {
  it('fetchRepos is FSA-compliant', () => {
    expect(isFSA(fetchRepos('some-repo'))).toBe(true)
  })

  it('fetchReposSucceeded is FSA-compliant', () => {
    const data = {}
    expect(isFSA(fetchReposSucceeded(data))).toBe(true)
  })

  it('fetchReposFailed is FSA-compliant', () => {
    const error = {}
    expect(isFSA(fetchReposFailed(error))).toBe(true)
  })
})
