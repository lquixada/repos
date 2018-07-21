import {call, take, fork, put} from 'redux-saga/effects'

import {
  PAGE_REQUESTED,
  fetchContributorsSucceeded,
  fetchCountsSucceeded,
  fetchPageSucceeded,
  fetchRepoSucceeded,
  fetchPageFailed
} from '../../actions'
import watchPages, {loadOwnerPage, loadRepoPage} from '../pages'
import {fetchAll, fetchCounts} from '../../helpers'

describe('Sagas (Pages)', () => {
  let owner

  beforeEach(() => {
    owner = 'owner1'
  })

  describe('watchPages', () => {
    it('watches owner page request', () => {
      const action = {payload: {name: 'owner', owner}}
      const gen = watchPages()

      expect(gen.next().value).toEqual(take(PAGE_REQUESTED))
      expect(gen.next(action).value).toEqual(fork(loadOwnerPage, action.payload))
    })

    it('watches repo page request', () => {
      const action = {payload: {name: 'repo', owner}}
      const gen = watchPages()

      expect(gen.next().value).toEqual(take(PAGE_REQUESTED))
      expect(gen.next(action).value).toEqual(fork(loadRepoPage, action.payload))
    })
  })

  describe('loadOwnerPage', () => {
    it('loads owner page', () => {
      const name = 'owner'
      const repoCount = []
      const gen = loadOwnerPage({name, owner})

      expect(gen.next().value).toEqual(call(fetchCounts, {owner}))

      expect(gen.next({repoCount}).value).toEqual(put(fetchCountsSucceeded({owner, data: repoCount})))
      expect(gen.next().value).toEqual(put(fetchPageSucceeded({name})))
    })

    it('handles errors', () => {
      const name = 'owner'
      const error = {
        stack: 'file.js:1:2'
      }
      const gen = loadOwnerPage({name, owner})

      expect(gen.next().value).toEqual(call(fetchCounts, {owner}))
      expect(gen.throw(error).value).toEqual(put(fetchPageFailed(name, error.stack)))
    })
  })

  describe('loadRepoPage', () => {
    let name
    let repoName

    beforeEach(() => {
      name = 'repo'
      repoName = 'repo1'
    })

    it('loads repo page', () => {
      const data = {
        repo: {},
        contributors: {},
        repoCount: {}
      }
      const gen = loadRepoPage({name, owner, repoName})

      expect(gen.next().value).toEqual(call(fetchAll, { owner, repoName }))

      expect(gen.next(data).value).toEqual(put(fetchRepoSucceeded({owner, repoName, data: data.repo})))
      expect(gen.next().value).toEqual(put(fetchCountsSucceeded({owner, data: data.repoCount})))
      expect(gen.next().value).toEqual(put(fetchContributorsSucceeded({owner, repoName, data: data.contributors})))
      expect(gen.next().value).toEqual(put(fetchPageSucceeded({name})))
    })

    it('handles errors', () => {
      const error = {
        stack: 'some-error'
      }

      const gen = loadRepoPage({name, owner, repoName})

      expect(gen.next().value).toEqual(call(fetchAll, { owner, repoName }))
      expect(gen.throw(error).value).toEqual(put(fetchPageFailed(name, error.stack)))
    })
  })
})
