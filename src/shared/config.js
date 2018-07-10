const config = {}

if (process.env.NODE_ENV === 'production') {
  Object.assign(config, {
    staticUrl: 'https://static.lquixada.com/repos',
    github: {
      contributorsUrl: 'https://repos.lquixada.com/api/:repo/contributors',
      repoUrl: 'https://repos.lquixada.com/api/:repo',
      reposUrl: 'https://repos.lquixada.com/api/repos',
      webUrl: 'https://github.com'
    }
  })
} else {
  Object.assign(config, {
    staticUrl: '/assets',
    github: {
      contributorsUrl: 'https://repos.lquixada.com/api/:repo/contributors',
      repoUrl: 'https://repos.lquixada.com/api/:repo',
      reposUrl: 'https://repos.lquixada.com/api/repos',
      webUrl: 'https://github.com'
    }
  })
}

export default config
