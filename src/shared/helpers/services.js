import fetch from 'cross-fetch'

import {repoUrl, contributorsUrl, reposUrl} from './urls'

export const fetchJson = async (url) => {
  const response = await fetch(url)
  const json = await response.json()

  return {response, json}
}

export const fetchContributors = async (repoName) => {
  const url = `${contributorsUrl(repoName)}?per_page=40`
  const {json} = await fetchJson(url)

  return json
}

export const fetchMoreContributors = async (url) => {
  const {json} = await fetchJson(url)

  return json
}

export const fetchRepo = async (repoName) => {
  const url = repoUrl(repoName)
  return fetchJson(url)
}

export const fetchRepos = async () => {
  const url = reposUrl()
  const {json} = await fetchJson(url)
  return json
}
