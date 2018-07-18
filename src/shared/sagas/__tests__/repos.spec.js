import {put, call} from 'redux-saga/effects'
import {fetchRepos} from '../../helpers'
import {fetchReposSucceeded, fetchReposFailed} from '../../actions'
import {loadRepos} from '../repos'

describe('Sagas (Repos)', () => {
  describe('loadRepos', () => {
    it('loads repos', () => {
      const repoCount = [{name: 'repo1'}, {name: 'repo2'}, {name: 'repo3'}]
      const gen = loadRepos('owner1')

      expect(gen.next().value).toEqual(call(fetchRepos, {owner: 'owner1'}))
      expect(gen.next({repoCount}).value).toEqual(put(fetchReposSucceeded(repoCount)))
      expect(gen.next()).toEqual({done: true, value: undefined})
    })

    it('handle error', () => {
      const error = {stack: 'file.js:1:2'}
      const gen = loadRepos('owner1')

      expect(gen.next().value).toEqual(call(fetchRepos, {owner: 'owner1'}))
      expect(gen.throw(error).value).toEqual(put(fetchReposFailed(error.stack)))
      expect(gen.next()).toEqual({done: true, value: undefined})
    })
  })
})
