import {isFSA} from 'flux-standard-action'

import {loadHomePage} from '../home-page'

describe('Actions (Home Page)', () => {
  it('loadHomePage is FSA-compliant', () => {
    expect(isFSA(loadHomePage())).toBe(true)
  })
})
