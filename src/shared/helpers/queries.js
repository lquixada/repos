import gql from 'graphql-tag'

import {getClient} from './client'

export const fetchContributors = async ({owner, repoName, page}) => {
  const client = getClient()
  const {data} = await client.query({
    query: gql`
      {
        contributors(owner: "${owner}", repo: "${repoName}", page: ${page}) {
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

export const fetchRepo = async ({ owner, repoName }) => {
  const client = getClient()
  const {data} = await client.query({
    query: gql`
      {
        repo(owner: "${owner}", name: "${repoName}") {
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

export const fetchCounts = async ({ owner }) => {
  const client = getClient()
  const {data} = await client.query({
    query: gql`
      {
        repoCount(owner: "${owner}") {
          name
          count
        }
      }
    `
  })

  return data
}

export const fetchAll = async ({ owner, repoName }) => {
  const client = getClient()
  const {data} = await client.query({
    query: gql`
      {
        repoCount(owner: "${owner}") {
          name
          count
        }
      
        repo(owner: "${owner}", name: "${repoName}") {
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
