import fetch from 'cross-fetch'

import {extractNext, extractTotal} from '../../shared/helpers'
import config from '../config'

const fetchJson = async (url) => {
  const separator = (url.indexOf('?') > -1 ? '&' : '?')
  const response = await fetch(`${url}${separator}access_token=${config.github.accessToken}`)
  const json = await response.json()

  return {response, json}
}

export const fetchContributorsCount = async (repoName) => {
  const url = config.github.contributorsUrl.replace(':repo', repoName)
  const {response} = await fetchJson(`${url}?page=1&per_page=1`)

  return extractTotal(response.headers.get('Link'))
}

export const fetchContributors = async (url) => {
  const {response, json} = await fetchJson(url)

  return {
    next: extractNext(response.headers.get('Link')),
    result: json
  }
}

export const fetchRepo = async (repoName) => {
  const url = config.github.repoUrl.replace(':repo', repoName)
  return fetchJson(url)
}

export const fetchRepos = async () => {
  const {json} = await fetchJson(config.github.reposUrl)
  return json
}
