import gql from 'graphql-tag'

import {getClient} from './client'

export const fetchContributors = async (variables) => {
  const client = getClient()
  const {data} = await client.query({
    variables,
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
    `
  })

  return data
}

export const fetchRepo = async (variables) => {
  const client = getClient()
  const {data} = await client.query({
    variables,
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
    `
  })

  return data
}

export const fetchCounts = async (variables) => {
  const client = getClient()
  const {data} = await client.query({
    variables,
    query: gql`
      query($owner: String!) {
        repoCount(owner: $owner) {
          name
          count
        }
      }
    `
  })

  return data
}

export const fetchAll = async (variables) => {
  const client = getClient()
  const {data} = await client.query({
    variables,
    query: gql`
      query($owner: String!, $repoName: String!) {
        repoCount(owner: $owner) {
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
    `
  })

  return data
}
