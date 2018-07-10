const reposHost = 'https://api.github.com'

export default {
  github: {
    accessToken: process.env.GITHUB_ACCESS_TOKEN,
    contributorsUrl: `${reposHost}/repos/facebook/:repo/contributors`,
    repoUrl: `${reposHost}/repos/facebook/:repo`,
    reposUrl: `${reposHost}/orgs/facebook/repos`
  }
}
