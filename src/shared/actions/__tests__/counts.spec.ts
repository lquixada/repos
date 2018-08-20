import {isFSA} from 'flux-standard-action'

import {fetchCounts, fetchCountsFailed, fetchCountsSucceeded} from '../counts'

describe('Actions (Counts)', () => {
  it('fetchCounts is FSA-compliant', () => {
    expect(isFSA(fetchCounts('owner1'))).toBe(true)
  })

  it('fetchCountsSucceeded is FSA-compliant', () => {
    const data = {}
    expect(isFSA(fetchCountsSucceeded(data))).toBe(true)
  })

  it('fetchCountsFailed is FSA-compliant', () => {
    const error = {}
    expect(isFSA(fetchCountsFailed('some-owner', error))).toBe(true)
  })
})
