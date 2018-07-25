import 'cross-fetch/polyfill'
import {GraphQLServerLambda} from 'graphql-yoga'

import config from './graphql/config'

const lambda = new GraphQLServerLambda(config)

exports.api = lambda.graphqlHandler
exports.playground = lambda.playgroundHandler
