import {githubUrl, issuesUrl, forksUrl, stargazersUrl, watchersUrl} from '../urls'

describe('Helpers (Urls)', () => {
  describe('githubUrl', () => {
    it('returns a repo\'s Github url for a given resource', () => {
      expect(githubUrl('some-repo', 'some-resource')).toBe('https://github.com/facebook/some-repo/some-resource')
    })
  })

  describe('issuesUrl', () => {
    it('returns a repo\'s Github issue url', () => {
      expect(issuesUrl('some-repo')).toBe('https://github.com/facebook/some-repo/issues')
    })
  })

  describe('forksUrl', () => {
    it('returns a repo\'s Github forks url', () => {
      expect(forksUrl('some-repo')).toBe('https://github.com/facebook/some-repo/network')
    })
  })

  describe('stargazersUrl', () => {
    it('returns a repo\'s Github stargazers url', () => {
      expect(stargazersUrl('some-repo')).toBe('https://github.com/facebook/some-repo/stargazers')
    })
  })

  describe('watchersUrl', () => {
    it('returns a repo\'s Github url', () => {
      expect(watchersUrl('some-repo')).toBe('https://github.com/facebook/some-repo/watchers')
    })
  })
})
