import {take, fork} from 'redux-saga/effects'

import {REPO_PAGE_REQUESTED} from '../../actions'
import {loadReposContributorsCount} from '../repos-contributors-count'
import watchLoadRepoPage from '../repo-page'
import {loadRepo} from '../repo'

describe('Sagas (Repo Page)', () => {
  describe('watchLoadRepoPage', () => {
    it('watches repo page load', () => {
      const repoName = 'repo1'
      const action = {payload: {repoName}}
      const gen = watchLoadRepoPage()

      expect(gen.next().value).toEqual(take(REPO_PAGE_REQUESTED))
      expect(gen.next(action).value).toEqual(fork(loadReposContributorsCount))
      expect(gen.next().value).toEqual(fork(loadRepo, repoName))
    })
  })
})
