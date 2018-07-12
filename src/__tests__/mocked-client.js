import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { SchemaLink } from 'apollo-link-schema'
import { makeExecutableSchema } from 'graphql-tools'

const typeDefs = `
type Query {
  repo(name: String!): Repo
  repoCount: [RepoCount!]!
  contributors(repo: String!, page: Int): Contributors
}

type Repo {
  name: String!
  description: String!
  html_url: String!
  stargazers_count: Int!
  subscribers_count: Int!
  forks_count: Int!
  open_issues_count: Int!
  license: License!
}

type License {
  name: String!
}

type Repos {
  name: String!
}

type RepoCount {
  name: String!
  count: Int!
}

type Contributors {
  nextPage: Int
  data: [Contributor!]!
}

type Contributor {
  login: String!
  html_url: String!
  avatar_url: String!
}
`

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

    contributors: () => ({
      nextPage: 2,
      data: [{
        login: 'user1',
        html_url: 'http://html_url/',
        avatar_url: 'http://avatar_url/'
      }]
    })
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
