import {put, call, take, fork} from 'redux-saga/effects'
import {fetchCounts} from '../../helpers'
import {COUNTS_REQUESTED, fetchCountsSucceeded, fetchCountsFailed} from '../../actions'
import watchCounts, {loadCounts} from '../counts'

describe('Sagas (Counts)', () => {
  let owner

  beforeEach(() => {
    owner = 'owner1'
  })

  describe('watchCounts', () => {
    it('watches counts request', () => {
      const action = {payload: {owner}}
      const gen = watchCounts()

      expect(gen.next().value).toEqual(take(COUNTS_REQUESTED))
      expect(gen.next(action).value).toEqual(fork(loadCounts, owner))
    })
  })

  describe('loadCounts', () => {
    it('loads counts', () => {
      const counts = [{name: 'repo1'}, {name: 'repo2'}, {name: 'repo3'}]
      const gen = loadCounts('owner1')

      expect(gen.next().value).toEqual(call(fetchCounts, {owner}))
      expect(gen.next({counts}).value).toEqual(put(fetchCountsSucceeded({owner, data: counts})))
      expect(gen.next()).toEqual({done: true, value: undefined})
    })

    it('handle error', () => {
      const error = {stack: 'file.js:1:2'}
      const gen = loadCounts('owner1')

      expect(gen.next().value).toEqual(call(fetchCounts, {owner}))
      expect(gen.throw(error).value).toEqual(put(fetchCountsFailed(error.stack)))
      expect(gen.next()).toEqual({done: true, value: undefined})
    })
  })
})
