import request from 'supertest';
import nock from 'nock';

describe('App API', () => {
  let server;

  beforeEach(() => {
    server = require('../../../server');
    server = server.default.listen(0);
  });

  beforeEach(() => {
    nock('https://api.github.com')
      .persist(true)
      .get('/orgs/facebook/repos')
      .query(true)
      .reply(200, [{
        id: 1,
        name: 'react',
        full_name: 'facebook/react'
      }]);

    nock('https://api.github.com')
      .persist(true)
      .get('/repos/facebook/react/contributors')
      .query(true)
      .reply(200, [{
        id: 1,
        login: 'user',
      }]);

    nock('https://api.github.com')
      .persist(true)
      .get('/repos/facebook/react')
      .query(true)
      .reply(200, {
        id: 1,
        name: 'react',
        full_name: 'facebook/react'
      });
  });

  afterEach((done) => {
    server.close((done));
  });

  afterEach(() => {
    nock.cleanAll();
  });

  describe('/', () => {
    it('is a valid path', (done) => {
      request(server)
        .get('/')
        .expect(200, done);
    });

    it('renders the main page', (done) => {
      request(server)
        .get('/')
        .expect((res) => {
          expect(res.text).toContain('Choose a repository on the menu.');
        })
        .end(done);
    });
  });

  describe('/r/:repo', () => {
    it('is a valid path', (done) => {
      request(server)
        .get('/r/react')
        .expect(200, done);
    });

    it('renders the repo page', (done) => {
      request(server)
        .get('/r/react')
        .expect((res) => {
          document.writeln(res.text);
          const h2 = document.querySelector('h2');
          expect(h2.innerHTML).toBe('react');
        })
        .end(done);
    });
  });

  describe('/notfound', () => {
    it('is not a valid path', (done) => {
      request(server)
        .get('/notfound')
        .expect(404, done);
    });

    it('renders the not found page', (done) => {
      request(server)
        .get('/notfound')
        .expect((res) => {
          document.writeln(res.text);
          const p = document.querySelector('p');
          expect(p.innerHTML).toBe('Whoops, looks like that page doesn\'t exist.');
        })
        .end(done);
    });
  });
});
