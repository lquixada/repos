import {isFSA} from 'flux-standard-action'

import {fetchCounts, fetchCountsFailed, fetchCountsSucceeded} from '../counts'

describe('Actions (Counts)', () => {
  it('fetchCounts is FSA-compliant', () => {
    expect(isFSA(fetchCounts('owner1'))).toBe(true)
  })

  it('fetchCountsSucceeded is FSA-compliant', () => {
    expect(isFSA(fetchCountsSucceeded({owner: 'some-owner', data: {}}))).toBe(true)
  })

  it('fetchCountsFailed is FSA-compliant', () => {
    expect(isFSA(fetchCountsFailed({owner: 'some-owner', error: 'some-error'}))).toBe(true)
  })
})
