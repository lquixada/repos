import request from 'supertest';
import * as helpers from '../../../shared/helpers/strings';

describe('Error Controller', () => {
  let server;

  beforeEach(() => {
    server = require('../../../server');
    server = server.default.listen(0);

    // Simulate an error no isEnabled helper.
    jest.spyOn(helpers, 'isEnabled').mockImplementation(() => {
      throw new Error('mocked error on isEnabled helper.');
    });
  });

  afterEach((done) => {
    jest.clearAllMocks();

    server.close((done));
  });

  describe('/', () => {
    it('is a valid path', (done) => {
      request(server)
        .get('/')
        .expect(500, done);
    });

    it('renders the main page', (done) => {
      request(server)
        .get('/')
        .expect((res) => {
          expect(res.text).toContain('Whoops, looks like an error occurred.');
          expect(res.text).toContain('Error: mocked error on isEnabled helper.');
        })
        .end(done);
    });
  });
});
