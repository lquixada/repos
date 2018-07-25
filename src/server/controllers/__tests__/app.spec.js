import supertest from 'supertest'

import server from '../../../server'
import createMockClient from '../../../__tests__/mocked-client'
import * as helpers from '../../../shared/helpers/client'

describe('App Controller', () => {
  let request

  beforeEach(() => {
    request = supertest(server)

    jest.spyOn(helpers, 'getClient')
      .mockReturnValue(createMockClient())
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('/r/:owner', () => {
    it('is a valid path', (done) => {
      request
        .get('/r/owner')
        .expect(200, done)
    })

    it('renders the main page', (done) => {
      request
        .get('/r/owner')
        .expect((res) => {
          expect(res.text).toContain('Choose a repository on the menu.')
        })
        .end(done)
    })
  })

  describe('/r/:owner/:repo', () => {
    it('is a valid path', (done) => {
      request
        .get('/r/owner1/react')
        .expect(200, done)
    })

    it('renders the repo page', (done) => {
      request
        .get('/r/owner1/react')
        .expect((res) => {
          document.writeln(res.text)
          const h2 = document.querySelector('h2')
          expect(h2.innerHTML).toBe('repo1')
        })
        .end(done)
    })
  })

  describe('/notfound', () => {
    it('is not a valid path', (done) => {
      request
        .get('/notfound')
        .expect(200, done)
    })

    it('renders the not found page', (done) => {
      request
        .get('/notfound')
        .expect((res) => {
          document.writeln(res.text)
          const p = document.querySelector('p')
          expect(p.innerHTML).toBe('Whoops, looks like that page doesn\'t exist.')
        })
        .end(done)
    })
  })
})
