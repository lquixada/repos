import {put, call, all} from 'redux-saga/effects'
import {fetchRepos, fetchContributorsCount} from '../../helpers'
import {fetchReposSucceeded, fetchReposFailed} from '../../actions'
import {loadRepos} from '../repos'

describe('Sagas (Repos Contributors Count)', () => {
  describe('loadRepos', () => {
    it('loads repos contributors count', () => {
      const repos = [{name: 'repo1'}, {name: 'repo2'}, {name: 'repo3'}]
      const counts = [5, 7, 2]
      const data = [['repo2', 7], ['repo1', 5], ['repo3', 2]]
      const gen = loadRepos()

      expect(gen.next().value).toEqual(call(fetchRepos))
      expect(gen.next(repos).value).toEqual(all([
        call(fetchContributorsCount, 'repo1'),
        call(fetchContributorsCount, 'repo2'),
        call(fetchContributorsCount, 'repo3')
      ]))
      expect(gen.next(counts).value).toEqual(put(fetchReposSucceeded(data)))
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
