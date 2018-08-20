import {getClient} from '../client'

describe('Helpers (Client)', () => {
  beforeAll(() => {
    jest.mock('apollo-boost')
  })

  afterAll(() => {
    jest.unmock('apollo-boost')
  })

  describe('getClient', () => {
    it('retrives an apollo client', () => {
      const client = getClient()
      expect(client).toEqual(expect.any(Object))
      expect(client.constructor.name).toBe('DefaultClient')
    })
  })
})
