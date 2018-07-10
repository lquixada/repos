export default {
  github: {
    accessToken: process.env.GITHUB_ACCESS_TOKEN,
    contributorsUrl: 'https://api.github.com/repos/facebook/:repo/contributors',
    repoUrl: 'https://api.github.com/repos/facebook/:repo',
    reposUrl: 'https://api.github.com/orgs/facebook/repos'
  }
}
