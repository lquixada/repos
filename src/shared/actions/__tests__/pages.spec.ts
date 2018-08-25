import {isFSA} from 'flux-standard-action'

import {fetchPage, fetchPageFailed, fetchPageSucceeded} from '../pages'

describe('Actions (Repos)', () => {
  it('fetchPage is FSA-compliant', () => {
    expect(isFSA(fetchPage('some-repo'))).toBe(true)
  })

  it('fetchPageSucceeded is FSA-compliant', () => {
    expect(isFSA(fetchPageSucceeded({name: 'page1'}))).toBe(true)
  })

  it('fetchPageFailed is FSA-compliant', () => {
    expect(isFSA(fetchPageFailed({name: 'page1', error: 'some-error'}))).toBe(true)
  })
})
