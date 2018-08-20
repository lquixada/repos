import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { SchemaLink } from 'apollo-link-schema'
import { makeExecutableSchema } from 'graphql-tools'

import typeDefs from '../api/graphql/typedefs'

const contributors = () => ({
  data: [{
    avatar_url: 'http://avatar_url/',
    html_url: 'http://html_url/',
    login: 'user1',
  }],
  nextPage: 2,
})

const resolvers = {
  Query: {
    repo: () => ({
      description: '',
      forks_count: 1,
      html_url: '',
      license: {
        name: '',
      },
      name: 'repo1',
      open_issues_count: 1,
      stargazers_count: 1,
      subscribers_count: 1,
    }),

    counts: () => ([
      {name: 'repo1', count: 2},
    ]),

    contributors,
  },

  Repo: {
    contributors,
  },
}

export default () => {
  const schema = makeExecutableSchema({
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    resolvers,
    typeDefs,
  })

  return new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: new SchemaLink({ schema }),
  })
}
