import gitHubApi from '@octokit/rest'

import typeDefs from './type-defs'
import resolvers from './resolvers'

const api = gitHubApi()

api.authenticate({
  type: 'token',
  token: process.env.GITHUB_ACCESS_TOKEN
})

export default {
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  context: () => ({ api })
}
