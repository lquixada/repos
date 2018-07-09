import {put, call} from 'redux-saga/effects'
import {fetchRepos} from '../../helpers'
import {fetchReposSucceeded, fetchReposFailed} from '../../actions'
import {loadRepos} from '../repos'

describe('Sagas (Repos Contributors Count)', () => {
  describe('loadRepos', () => {
    it('loads repos contributors count', () => {
      const repos = [{name: 'repo1'}, {name: 'repo2'}, {name: 'repo3'}]
      const gen = loadRepos()

      expect(gen.next().value).toEqual(call(fetchRepos))
      expect(gen.next(repos).value).toEqual(put(fetchReposSucceeded(repos)))
      expect(gen.next()).toEqual({done: true, value: undefined})
    })

    it('handle error', () => {
      const error = {stack: 'file.js:1:2'}
      const gen = loadRepos()

      expect(gen.next().value).toEqual(call(fetchRepos))
      expect(gen.throw(error).value).toEqual(put(fetchReposFailed(error.stack)))
      expect(gen.next()).toEqual({done: true, value: undefined})
    })
  })
})
