import {call, fork, put, take} from 'redux-saga/effects'

import {
  fetchContributorsSucceeded,
  fetchCountsSucceeded,
  fetchPageFailed,
  fetchPageSucceeded,
  fetchRepoSucceeded,
  PAGE_REQUESTED,
} from '../../actions'
import {fetchAll, fetchCounts} from '../../helpers'
import watchPages, {loadRepoPage} from '../pages'

describe('Sagas (Pages)', () => {
  let owner

  beforeEach(() => {
    owner = 'owner1'
  })

  describe('watchPages', () => {
    it('watches repo page request', () => {
      const action = {payload: {name: 'repo', owner}}
      const gen = watchPages()

      expect(gen.next().value).toEqual(take(PAGE_REQUESTED))
      expect(gen.next(action).value).toEqual(fork(loadRepoPage, {name: 'repo', owner}))
    })
  })

  describe('loadRepoPage', () => {
    let name
    let repoName

    beforeEach(() => {
      name = 'repo'
      repoName = 'repo1'
    })

    it('loads repo page with repo', () => {
      const data = {
        counts: {},
        repo: {
          contributors: {},
        },
      }
      const gen = loadRepoPage({name, owner, repoName})

      expect(gen.next().value).toEqual(call(fetchAll, {owner, repoName}))

      expect(gen.next(data).value).toEqual(put(fetchRepoSucceeded({owner, repoName, data: data.repo})))
      expect(gen.next().value).toEqual(put(fetchContributorsSucceeded({owner, repoName, data: data.repo.contributors})))
      expect(gen.next().value).toEqual(put(fetchCountsSucceeded({owner, data: data.counts})))
      expect(gen.next().value).toEqual(put(fetchPageSucceeded({name})))
    })

    it('loads repo page without repo', () => {
      const data = {
        contributors: {},
        counts: {},
        repo: {},
      }
      const gen = loadRepoPage({name, owner})

      expect(gen.next().value).toEqual(call(fetchCounts, {owner}))
      expect(gen.next(data).value).toEqual(put(fetchCountsSucceeded({owner, data: data.counts})))
      expect(gen.next().value).toEqual(put(fetchPageSucceeded({name})))
    })

    it('handles errors', () => {
      const error = {
        stack: 'some-error',
      }

      const gen = loadRepoPage({name, owner, repoName})

      expect(gen.next().value).toEqual(call(fetchAll, {owner, repoName}))
      expect(gen.throw && gen.throw(error).value).toEqual(put(fetchPageFailed({name, error: error.stack})))
    })
  })
})
