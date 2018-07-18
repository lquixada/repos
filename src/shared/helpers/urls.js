import config from '../../server/config'

export const imgUrl = (filename) => `${config.staticUrl}/images/${filename}`

export const githubUrl = (owner, repoName, resource) => `${config.github}/${owner}/${repoName}/${resource}`

export const issuesUrl = (owner, repoName) => githubUrl(owner, repoName, 'issues')

export const forksUrl = (owner, repoName) => githubUrl(owner, repoName, 'network')

export const stargazersUrl = (owner, repoName) => githubUrl(owner, repoName, 'stargazers')

export const watchersUrl = (owner, repoName) => githubUrl(owner, repoName, 'watchers')
