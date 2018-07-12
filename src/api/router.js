import express from 'express'
import gitHubApi from '@octokit/rest'

import {extractTotal} from '../shared/helpers'

const octokit = gitHubApi()

octokit.authenticate({
  type: 'token',
  token: process.env.GITHUB_ACCESS_TOKEN
})

const router = express.Router()

const getContributors = async (repo) => {
  const {headers} = await octokit.repos.getContributors({
    owner: 'facebook',
    repo,
    per_page: 1,
    page: 1
  })

  return extractTotal(headers.link)
}

router.get('/repos/', async (req, res) => {
  const {data} = await octokit.repos.getForOrg({
    org: 'facebook',
    type: 'public'
  })
  const repos = data.map((repo) => repo.name)
  const counts = await Promise.all(repos.map(getContributors))

  const json = repos
    .map((repo, i) => [repo, counts[i]])
    .sort((a, b) => b[1] - a[1])

  res.json(json)
})

router.get('/:repo/contributors/', async (req, res) => {
  let nextPage = null
  const {data, headers} = await octokit.repos.getContributors({
    owner: 'facebook',
    repo: req.params.repo,
    per_page: 40,
    page: req.query.page || 1
  })

  const regex = /<([^>]*)>;\s*rel="next"/
  const match = regex.exec(headers.link)

  if (match) {
    let url = match[1]
    nextPage = url.match(/[?&]page=(\d+)/)[1]
  }

  res.json({
    nextPage,
    data
  })
})

router.get('/:repo/', async (req, res) => {
  const {repo} = req.params
  const {data} = await octokit.repos.get({owner: 'facebook', repo})

  res.json(data)
})

router.get('/', async (req, res) => {
  res.send('It\'s working!')
})

export default router
