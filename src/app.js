require('babel-polyfill');

const {PORT = 8000} = process.env;
const server = require('./server');

server.default.listen(PORT, () => {
  console.info(`Server running on: http://localhost:${PORT}/`);
});
