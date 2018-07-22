import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { SchemaLink } from 'apollo-link-schema'
import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from '../api/type-defs'

const contributors = () => ({
  nextPage: 2,
  data: [{
    login: 'user1',
    html_url: 'http://html_url/',
    avatar_url: 'http://avatar_url/'
  }]
})

const resolvers = {
  Query: {
    repo: () => ({
      name: 'repo1',
      description: '',
      html_url: '',
      stargazers_count: 1,
      subscribers_count: 1,
      forks_count: 1,
      open_issues_count: 1,
      license: {
        name: ''
      }
    }),

    repoCount: () => ([
      {name: 'repo1', count: 2}
    ]),

    contributors
  },

  Repo: {
    contributors
  }
}

export default () => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    resolverValidationOptions: {
      requireResolversForResolveType: false
    }
  })

  return new ApolloClient({
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache({ addTypename: false })
  })
}
