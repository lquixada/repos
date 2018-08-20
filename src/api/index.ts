import {GraphQLServer} from 'graphql-yoga'

import config from './graphql/config'
import logger from './logger'

const server = new GraphQLServer(config)

server.express.use(logger)

export default server
