import config from '../config'

export const imgUrl = (filename) => `${config.staticUrl}/images/${filename}`

export const githubUrl = (repoName, resource) => `${config.github.webUrl}/facebook/${repoName}/${resource}`

export const issuesUrl = (repoName) => githubUrl(repoName, 'issues')

export const forksUrl = (repoName) => githubUrl(repoName, 'network')

export const stargazersUrl = (repoName) => githubUrl(repoName, 'stargazers')

export const watchersUrl = (repoName) => githubUrl(repoName, 'watchers')

export const contributorsUrl = (repoName) => config.github.contributorsUrl.replace(':repo', repoName)

export const repoUrl = (repoName) => config.github.repoUrl.replace(':repo', repoName)

export const reposUrl = (repoName) => config.github.reposUrl
