import { ApolloServer } from 'apollo-server-lambda'

import config from './config'

const server = new ApolloServer(config)

exports.handler = server.createHandler({
  gui: true,
  cors: {
    origin: true,
    credentials: true
  }
})
