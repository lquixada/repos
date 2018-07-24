import request from 'supertest'
import * as helpers from '../../../shared/helpers/redial'

describe('Error Controller', () => {
  let server

  beforeEach(() => {
    server = require('../../../server')
    server = server.default.listen(0)

    // Simulate an error on trigger helper.
    jest.spyOn(helpers, 'trigger').mockImplementation(() => {
      throw new Error('mocked error on trigger helper.')
    })
  })

  afterEach((done) => {
    jest.clearAllMocks()

    server.close((done))
  })

  describe('/', () => {
    it('is a valid path', (done) => {
      request(server)
        .get('/')
        .expect(500, done)
    })

    it('renders the main page', (done) => {
      request(server)
        .get('/')
        .expect((res) => {
          expect(res.text).toContain('Whoops, looks like an error occurred.')
          expect(res.text).toContain('Error: mocked error on trigger helper.')
        })
        .end(done)
    })
  })
})
