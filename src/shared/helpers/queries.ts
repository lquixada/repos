import gql from 'graphql-tag'

import {getClient} from './client'

export const fetchContributors = async (variables: object) => {
  const client = getClient()
  const {data} = await client.query({
    query: gql`
      query($owner: String!, $repoName: String!, $page: Int) {
        contributors(owner: $owner, repo: $repoName, page: $page) {
          nextPage
          data {
            login
            html_url
            avatar_url
          }
        }
      }
    `,
    variables,
  })

  return data
}

export const fetchRepo = async (variables: object) => {
  const client = getClient()
  const {data} = await client.query({
    query: gql`
      query($owner: String!, $repoName: String!) {
        repo(owner: $owner, name: $repoName) {
          name
          description
          html_url
          stargazers_count
          forks_count
          subscribers_count
          open_issues_count
          contributors {
            nextPage
            data {
              login
              html_url
              avatar_url
            }
          }
          license {
            name
          }
        }
      }
    `,
    variables,
  })

  return data
}

export const fetchCounts = async (variables: object) => {
  const client = getClient()
  const {data} = await client.query({
    query: gql`
      query($owner: String!) {
        counts(owner: $owner) {
          name
          count
        }
      }
    `,
    variables,
  })

  return data
}

export const fetchAll = async (variables: object) => {
  const client = getClient()
  const {data} = await client.query({
    query: gql`
      query($owner: String!, $repoName: String!) {
        counts(owner: $owner) {
          name
          count
        }

        repo(owner: $owner, name: $repoName) {
          name
          description
          html_url
          stargazers_count
          forks_count
          subscribers_count
          open_issues_count
          contributors {
            nextPage
            data {
              login
              html_url
              avatar_url
            }
          }
          license {
            name
          }
        }
      }
    `,
    variables,
  })

  return data
}
