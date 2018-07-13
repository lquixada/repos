import 'cross-fetch/dist/node-polyfill'
import gql from 'graphql-tag'

import {getClient} from './client'

export const fetchContributors = async (repoName, page) => {
  const client = getClient()
  const {data} = await client.query({
    query: gql`
      {
        contributors(repo: "${repoName}", page: ${page}) {
          nextPage
          data {
            login
            html_url
            avatar_url
          }
        }
      }
    `})

  return data
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

        contributors(repo: "${repoName}", page: 1) {
          nextPage
          data {
            login
            html_url
            avatar_url
          }
        }
      }
    `})

  return data
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

  return data
}

export const fetchAll = async (repoName) => {
  const client = getClient()
  const {data} = await client.query({
    query: gql`
    {
      repoCount {
        name
        count
      }
    
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
      
      contributors(repo: "${repoName}", page: 1) {
        nextPage
        data {
          login
          html_url
          avatar_url
        }
      }
    }
    `})

  return data
}
