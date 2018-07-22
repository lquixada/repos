import {put, call, take, fork} from 'redux-saga/effects'
import {fetchRepo} from '../../helpers'
import {fetchRepoSucceeded, fetchRepoFailed, fetchContributorsSucceeded, REPO_REQUESTED} from '../../actions'
import watchRepo, {loadRepo} from '../repo'

describe('Sagas (Repo)', () => {
  let owner
  let repoName

  beforeEach(() => {
    owner = 'owner1'
    repoName = 'repo1'
  })

  describe('watchRepo', () => {
    it('watches repo', () => {
      const action = {payload: {repoName}}
      const gen = watchRepo()

      expect(gen.next().value).toEqual(take(REPO_REQUESTED))
      expect(gen.next(action).value).toEqual(fork(loadRepo, {repoName}))
    })
  })

  describe('loadRepo', () => {
    it('loads repo', () => {
      const data = {
        repo: {
          contributors: {
            nextPage: 2,
            data: [{login: 'user1'}]
          }
        }
      }
      const gen = loadRepo({owner, repoName})

      expect(gen.next().value).toEqual(call(fetchRepo, {owner, repoName}))
      expect(gen.next(data).value).toEqual(put(fetchRepoSucceeded({owner, repoName, data: data.repo})))
      expect(gen.next(data).value).toEqual(put(fetchContributorsSucceeded({owner, repoName, data: data.repo.contributors})))
      expect(gen.next()).toEqual({done: true, value: undefined})
    })

    it('handle error', () => {
      const error = {stack: 'file.js:1:2'}
      const gen = loadRepo({repoName})

      expect(gen.next().value).toEqual(call(fetchRepo, {repoName}))
      expect(gen.throw(error).value).toEqual(put(fetchRepoFailed(repoName, error.stack)))
      expect(gen.next()).toEqual({done: true, value: undefined})
    })
  })
})
