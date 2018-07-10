const reposHost = process.env.NODE_ENV === 'production' ? 'https://repos.lquixada.com' : 'http://localhost:3000'

export default {
  staticUrl: process.env.NODE_ENV === 'production' ? 'https://static.lquixada.com/repos' : '/assets',
  github: {
    contributorsUrl: `${reposHost}/api/:repo/contributors`,
    repoUrl: `${reposHost}/api/:repo`,
    reposUrl: `${reposHost}/api/repos`,
    webUrl: 'https://github.com'
  }
}
