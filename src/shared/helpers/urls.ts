import config from '../../server/config'

export const imgUrl = (filename: string) => `${config.staticUrl}/images/${filename}`

export const githubUrl = (owner: string, repoName: string, resource: string) =>
  `${config.github}/${owner}/${repoName}/${resource}`

export const issuesUrl = (owner: string, repoName: string) => githubUrl(owner, repoName, 'issues')

export const forksUrl = (owner: string, repoName: string) => githubUrl(owner, repoName, 'network')

export const stargazersUrl = (owner: string, repoName: string) => githubUrl(owner, repoName, 'stargazers')

export const watchersUrl = (owner: string, repoName: string) => githubUrl(owner, repoName, 'watchers')
