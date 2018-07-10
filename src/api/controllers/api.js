import express from 'express'
import url from 'url'

import {convertNext, fetchContributors, fetchContributorsCount, fetchRepo, fetchRepos} from '../helpers'
import config from '../config'

const router = express.Router()

router.get('/repos/', async (req, res) => {
  let repos = await fetchRepos()
  repos = repos.map((repo) => repo.name)

  const calls = repos.map((name) => fetchContributorsCount(name))
  const counts = await Promise.all(calls)

  const data = repos
    .map((repoName, i) => [repoName, counts[i]])
    .sort((a, b) => b[1] - a[1])

  res.json(data)
})

router.get('/:repo/contributors/', async (req, res) => {
  const uri = config.github.contributorsUrl.replace(':repo', req.params.repo)
  const {search} = url.parse(req.url)
  const data = await fetchContributors(`${uri}${search || ''}`)

  data.next = convertNext(req, data.next)

  res.json(data)
})

router.get('/:repo/', async (req, res) => {
  const {json} = await fetchRepo(req.params.repo)
  res.json(json)
})

router.get('/', async (req, res) => {
  res.send('It\'s working!')
})

export default router
