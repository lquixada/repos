import {forksUrl, githubUrl, issuesUrl, stargazersUrl, watchersUrl} from '../urls'

describe('Helpers (Urls)', () => {
  describe('githubUrl', () => {
    it('returns a repo\'s Github url for a given resource', () => {
      const url = 'https://github.com/owner1/some-repo/some-resource'
      expect(githubUrl('owner1', 'some-repo', 'some-resource')).toBe(url)
    })
  })

  describe('issuesUrl', () => {
    it('returns a repo\'s Github issue url', () => {
      expect(issuesUrl('owner1', 'some-repo')).toBe('https://github.com/owner1/some-repo/issues')
    })
  })

  describe('forksUrl', () => {
    it('returns a repo\'s Github forks url', () => {
      expect(forksUrl('owner1', 'some-repo')).toBe('https://github.com/owner1/some-repo/network')
    })
  })

  describe('stargazersUrl', () => {
    it('returns a repo\'s Github stargazers url', () => {
      expect(stargazersUrl('owner1', 'some-repo')).toBe('https://github.com/owner1/some-repo/stargazers')
    })
  })

  describe('watchersUrl', () => {
    it('returns a repo\'s Github url', () => {
      expect(watchersUrl('owner1', 'some-repo')).toBe('https://github.com/owner1/some-repo/watchers')
    })
  })
})
