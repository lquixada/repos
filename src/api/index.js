import {GraphQLServer} from 'graphql-yoga'

import logger from './logger'
import config from './graphql/config'

const server = new GraphQLServer(config)

server.express.use(logger)

export default server
