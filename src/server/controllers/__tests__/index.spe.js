import request from 'supertest';

describe('App API', () => {
  let server;

  beforeEach(() => {
    server = require('../../../server');
    server = server.default.listen(0);
  });

  afterEach((done) => {
    server.close((done));
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
          document.writeln(res.text);
          const app = document.getElementById('app');
          expect(typeof app).toBe('object');
        })
        .end(done);
    });
  });

  describe('/unknownpage', () => {
    it('is not a valid page', (done) => {
      request(server)
        .get('/unknownpage')
        .expect(404, done);
    });

    it('renders the "Not found" page', (done) => {
      request(server)
        .get('/unknownpage')
        .expect((res) => {
          expect(res.text).toBe('Not found');
        })
        .end(done);
    });
  });
});
