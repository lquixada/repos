import {github, cloudfront} from '../config'

export const imgUrl = (filename) => `${cloudfront}/images/${filename}`

export const githubUrl = (repoName, resource) => `${github.hosts.web}/facebook/${repoName}/${resource}`

export const issuesUrl = (repoName) => githubUrl(repoName, 'issues')

export const forksUrl = (repoName) => githubUrl(repoName, 'network')

export const stargazersUrl = (repoName) => githubUrl(repoName, 'stargazers')

export const watchersUrl = (repoName) => githubUrl(repoName, 'watchers')

export const contributorsUrl = (repoName) => github.endpoints.contributors.replace(':repo', repoName)

export const repoUrl = (repoName) => github.endpoints.repo.replace(':repo', repoName)

export const reposUrl = (repoName) => github.endpoints.repos
