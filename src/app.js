import server from './server';

const {PORT = 3000} = process.env;

server.listen(PORT, () => {
  console.info(`Server running on: http://localhost:${PORT}/`);
});
