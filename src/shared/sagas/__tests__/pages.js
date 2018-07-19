import {take, fork} from 'redux-saga/effects'

import {PAGE_REQUESTED} from '../../actions'
import watchPages, {loadOwnerPage, loadRepoPage} from '../pages'

describe('Sagas (Pages)', () => {
  describe('watchPages', () => {
    it('watches owner page request', () => {
      const action = {payload: {name: 'owner', owner: 'owner1'}}
      const gen = watchPages()

      expect(gen.next().value).toEqual(take(PAGE_REQUESTED))
      expect(gen.next(action).value).toEqual(fork(loadOwnerPage, action.payload))
    })

    it('watches repo page request', () => {
      const action = {payload: {name: 'repo', owner: 'owner1'}}
      const gen = watchPages()

      expect(gen.next().value).toEqual(take(PAGE_REQUESTED))
      expect(gen.next(action).value).toEqual(fork(loadRepoPage, action.payload))
    })
  })
})
