import { gql } from 'apollo-server-express'

export default gql`
  type Query {
    repo(owner: String, name: String!): Repo
    repoCount(owner: String): [RepoCount!]!
    contributors(owner: String, repo: String!, page: Int): Contributors
  }

  type Repo {
    name: String!
    description: String!
    html_url: String!
    stargazers_count: Int!
    subscribers_count: Int!
    forks_count: Int!
    open_issues_count: Int!
    owner: Owner!
    contributors(page: Int): Contributors
    license: License
  }

  type License {
    name: String!
  }

  type Owner {
    login: String!
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
