import express from 'express'
import url from 'url'
import querystring from 'querystring'
import fetch from 'cross-fetch'

import {extractNext, extractTotal} from '../../shared/helpers'

const accessToken = process.env.GITHUB_ACCESS_TOKEN
const router = express.Router()

const config = {
  github: {
    contributorsUrl: 'https://api.github.com/repos/facebook/:repo/contributors',
    repoUrl: 'https://api.github.com/repos/facebook/:repo',
    reposUrl: 'https://api.github.com/orgs/facebook/repos'
  }
}

const fetchJson = async (url) => {
  const separator = (url.indexOf('?') > -1 ? '&' : '?')
  const response = await fetch(`${url}${separator}access_token=${accessToken}`)
  const json = await response.json()

  return {response, json}
}

const fetchContributorsCount = async (repoName) => {
  const url = config.github.contributorsUrl.replace(':repo', repoName)
  const {response} = await fetchJson(`${url}?page=1&per_page=1`)

  return extractTotal(response.headers.get('Link'))
}

const fetchContributors = async (url) => {
  const {response, json} = await fetchJson(url)

  return {
    next: extractNext(response.headers.get('Link')),
    result: json
  }
}

const fetchRepo = async (repoName) => {
  const url = config.github.repoUrl.replace(':repo', repoName)
  return fetchJson(url)
}

const fetchRepos = async () => {
  const {json} = await fetchJson(config.github.reposUrl)
  return json
}

const convertNext = (req, href) => {
  if (!href) {
    return ''
  }

  const {pathname} = url.parse(req.originalUrl)
  const {query} = url.parse(href)
  const qs = querystring.parse(query)
  const params = querystring.stringify({
    page: qs.page,
    per_page: qs.per_page
  })

  return `${req.protocol}://${req.headers.host}${pathname}?${params}`
}

router.get('/repos/', async (req, res) => {
  try {
    let repos = await fetchRepos()
    repos = repos.map((repo) => repo.name)

    const calls = repos.map((name) => fetchContributorsCount(name))
    const counts = await Promise.all(calls)

    const data = repos
      .map((repoName, i) => [repoName, counts[i]])
      .sort((a, b) => b[1] - a[1])

    res.json(data)
  } catch (error) {
    console.info(error)
    res.json(error)
  }
})

router.get('/:repo/contributors/', async (req, res) => {
  try {
    const uri = config.github.contributorsUrl.replace(':repo', req.params.repo)
    const {search} = url.parse(req.url)
    const data = await fetchContributors(`${uri}${search || ''}`)

    data.next = convertNext(req, data.next)

    res.json(data)
  } catch (error) {
    console.info(error)
    res.json(error)
  }
})

router.get('/:repo/', async (req, res) => {
  try {
    const {json} = await fetchRepo(req.params.repo)
    res.json(json)
  } catch (error) {
    console.info(error)
    res.json(error)
  }
})

export default router
