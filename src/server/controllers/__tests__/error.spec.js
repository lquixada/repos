import supertest from 'supertest'

import server from '../../../server'
import * as helpers from '../../../shared/helpers/redial'

describe('Error Controller', () => {
  let request

  beforeEach(() => {
    request = supertest(server)

    // Simulate an error on trigger helper.
    jest.spyOn(helpers, 'trigger').mockImplementation(() => {
      throw new Error('mocked error on trigger helper.')
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('/', () => {
    it('is a valid path', (done) => {
      request
        .get('/')
        .expect(500, done)
    })

    it('renders the main page', (done) => {
      request
        .get('/')
        .expect((res) => {
          expect(res.text).toContain('Whoops, looks like an error occurred.')
        })
        .end(done)
    })
  })
})
