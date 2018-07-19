import {put, call} from 'redux-saga/effects'
import {fetchRepos} from '../../helpers'
import {fetchReposSucceeded, fetchReposFailed} from '../../actions'
import {loadRepos} from '../repos'

describe('Sagas (Repos)', () => {
  describe('loadRepos', () => {
    it('loads repos', () => {
      const owner = 'owner1'
      const repoCount = [{name: 'repo1'}, {name: 'repo2'}, {name: 'repo3'}]
      const gen = loadRepos('owner1')

      expect(gen.next().value).toEqual(call(fetchRepos, {owner}))
      expect(gen.next({repoCount}).value).toEqual(put(fetchReposSucceeded({owner, data: repoCount})))
      expect(gen.next()).toEqual({done: true, value: undefined})
    })

    it('handle error', () => {
      const owner = 'owner1'
      const error = {stack: 'file.js:1:2'}
      const gen = loadRepos('owner1')

      expect(gen.next().value).toEqual(call(fetchRepos, {owner}))
      expect(gen.throw(error).value).toEqual(put(fetchReposFailed(error.stack)))
      expect(gen.next()).toEqual({done: true, value: undefined})
    })
  })
})
