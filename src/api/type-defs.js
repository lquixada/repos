import { gql } from 'apollo-server-express'

export default gql`
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
