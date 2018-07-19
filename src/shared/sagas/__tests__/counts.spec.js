import {put, call} from 'redux-saga/effects'
import {fetchCounts} from '../../helpers'
import {fetchCountsSucceeded, fetchCountsFailed} from '../../actions'
import {loadCounts} from '../counts'

describe('Sagas (Counts)', () => {
  describe('loadCounts', () => {
    it('loads counts', () => {
      const owner = 'owner1'
      const repoCount = [{name: 'repo1'}, {name: 'repo2'}, {name: 'repo3'}]
      const gen = loadCounts('owner1')

      expect(gen.next().value).toEqual(call(fetchCounts, {owner}))
      expect(gen.next({repoCount}).value).toEqual(put(fetchCountsSucceeded({owner, data: repoCount})))
      expect(gen.next()).toEqual({done: true, value: undefined})
    })

    it('handle error', () => {
      const owner = 'owner1'
      const error = {stack: 'file.js:1:2'}
      const gen = loadCounts('owner1')

      expect(gen.next().value).toEqual(call(fetchCounts, {owner}))
      expect(gen.throw(error).value).toEqual(put(fetchCountsFailed(error.stack)))
      expect(gen.next()).toEqual({done: true, value: undefined})
    })
  })
})
