import {ApolloServer} from 'apollo-server-express'
import gitHubApi from '@octokit/rest'

import typeDefs from './type-defs'
import resolvers from './resolvers'

const api = gitHubApi()

api.authenticate({
  type: 'token',
  token: process.env.GITHUB_ACCESS_TOKEN
})

export default new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  context: () => ({ api })
})
