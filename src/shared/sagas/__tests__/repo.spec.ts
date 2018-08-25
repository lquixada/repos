import {call, fork, put, take} from 'redux-saga/effects'
import {fetchContributorsSucceeded, fetchRepoFailed, fetchRepoSucceeded, REPO_REQUESTED} from '../../actions'
import {fetchRepo} from '../../helpers'
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
      const action = {payload: {owner, repoName}}
      const gen = watchRepo()

      expect(gen.next().value).toEqual(take(REPO_REQUESTED))
      expect(gen.next(action).value).toEqual(fork(loadRepo, {owner, repoName}))
    })
  })

  describe('loadRepo', () => {
    it('loads repo', () => {
      const data = {
        repo: {
          contributors: {
            data: [{login: 'user1'}],
            nextPage: 2,
          },
        },
      }
      const gen = loadRepo({owner, repoName})

      expect(gen.next().value).toEqual(call(fetchRepo, {owner, repoName}))
      expect(gen.next(data).value).toEqual(put(fetchRepoSucceeded({owner, repoName, data: data.repo})))
      expect(gen.next(data).value).toEqual(put(fetchContributorsSucceeded({
        data: data.repo.contributors,
        owner,
        repoName,
      })))
      expect(gen.next()).toEqual({done: true, value: undefined})
    })

    it('handle error', () => {
      const error = {stack: 'file.js:1:2'}
      const gen = loadRepo({owner, repoName})

      expect(gen.next().value).toEqual(call(fetchRepo, {owner, repoName}))
      expect(gen.throw && gen.throw(error).value).toEqual(put(fetchRepoFailed({owner, repoName, error: error.stack})))
      expect(gen.next()).toEqual({done: true, value: undefined})
    })
  })
})
