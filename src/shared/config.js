const pageHost = 'https://github.com'
const apiHost = 'https://api.github.com'

export const cloudfront = process.env.NODE_ENV === 'production' ? 'https://d3jdhqonup1j2z.cloudfront.net' : '/assets'

export const github = {
  accessToken: process.env.GITHUB_ACCESS_TOKEN,
  hosts: {
    api: apiHost,
    web: pageHost
  },
  endpoints: {
    contributors: `${apiHost}/repos/facebook/:repo/contributors`,
    repo: `${apiHost}/repos/facebook/:repo`,
    repos: `${apiHost}/orgs/facebook/repos`
  }
}
