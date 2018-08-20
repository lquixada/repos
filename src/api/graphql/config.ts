import gitHubApi from '@octokit/rest'

import resolvers from './resolvers'
import typeDefs from './typedefs'

const api = (gitHubApi as any)()

api.authenticate({
  token: process.env.GITHUB_ACCESS_TOKEN,
  type: 'token',
})

export default {
  context: () => ({ api }),
  resolvers,
  typeDefs,
}
