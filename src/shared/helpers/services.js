import 'cross-fetch/polyfill'
import gql from 'graphql-tag'

import {getClient} from './client'

export const fetchContributors = async (repoName, page) => {
  const client = getClient()
  const {data} = await client.query({
    query: gql`
      {
        contributors(repo: "${repoName}") {
          nextPage
          data {
            login
            html_url
            avatar_url
          }
        }
      }
    `})

  return data.contributors
}

export const fetchRepo = async (repoName) => {
  const client = getClient()
  const {data} = await client.query({
    query: gql`
      {
        repo(name: "${repoName}") {
          name
          description
          html_url
          stargazers_count
          forks_count
          subscribers_count
          open_issues_count
          license {
            name
          }
        }
      }
    `})

  return data.repo
}

export const fetchRepos = async () => {
  const client = getClient()
  const {data} = await client.query({
    query: gql`
      {
        repoCount {
          name
          count
        }
      }
    `})

  return data.repoCount
    // Convert result
    .map(repo => [repo.name, repo.count])
    // Sort result
    .sort((a, b) => b[1] - a[1])
}
