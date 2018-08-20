import {isFSA} from 'flux-standard-action'

import {fetchPage, fetchPageFailed, fetchPageSucceeded} from '../pages'

describe('Actions (Repos)', () => {
  it('fetchPage is FSA-compliant', () => {
    expect(isFSA(fetchPage('some-repo'))).toBe(true)
  })

  it('fetchPageSucceeded is FSA-compliant', () => {
    const data = {}
    expect(isFSA(fetchPageSucceeded(data))).toBe(true)
  })

  it('fetchPageFailed is FSA-compliant', () => {
    const error = {}
    expect(isFSA(fetchPageFailed('page1', error))).toBe(true)
  })
})
