import {put, call, take, fork, select} from 'redux-saga/effects'
import {fetchContributors} from '../../helpers'
import {
  CONTRIBUTORS_REQUESTED, MORE_CONTRIBUTORS_REQUESTED,
  fetchContributorsSucceeded, fetchContributorsFailed,
  fetchMoreContributorsSucceeded, fetchMoreContributorsFailed
} from '../../actions'
import {
  loadContributors, loadMoreContributors, watchContributors, watchMoreContributors
} from '../contributors'
import {getNextPage} from '../../selectors'

describe('Sagas (Contributors)', () => {
  let data
  let error
  let repoName

  beforeEach(() => {
    data = {contributors: {key: 'value'}}
    error = {stack: 'file.js:1:2'}
    repoName = 'repo1'
  })

  describe('First Contributors', () => {
    describe('watchContributors', () => {
      it('watches repo', () => {
        const action = {payload: {repoName}}
        const gen = watchContributors()

        expect(gen.next().value).toEqual(take(CONTRIBUTORS_REQUESTED))
        expect(gen.next(action).value).toEqual(fork(loadContributors, repoName))
      })
    })

    describe('loadContributors', () => {
      it('loads contributors', () => {
        const gen = loadContributors(repoName)

        expect(gen.next().value).toEqual(call(fetchContributors, repoName, 1))
        expect(gen.next(data).value).toEqual(put(fetchContributorsSucceeded(repoName, data.contributors)))
        expect(gen.next()).toEqual({done: true, value: undefined})
      })

      it('handle error', () => {
        const gen = loadContributors(repoName)

        expect(gen.next().value).toEqual(call(fetchContributors, repoName, 1))
        expect(gen.throw(error).value).toEqual(put(fetchContributorsFailed(repoName, error.stack)))
        expect(gen.next()).toEqual({done: true, value: undefined})
      })
    })
  })

  describe('More Contributors', () => {
    let nextPage

    beforeEach(() => {
      nextPage = 2
    })

    describe('watchMoreContributors', () => {
      it('watches repo', () => {
        const action = {payload: {repoName}}
        const gen = watchMoreContributors()

        expect(gen.next().value).toEqual(take(MORE_CONTRIBUTORS_REQUESTED))
        expect(gen.next(action).value).toEqual(fork(loadMoreContributors, repoName))
      })
    })

    describe('loadMoreContributors', () => {
      it('loads more contributors', () => {
        const gen = loadMoreContributors(repoName)

        expect(gen.next().value).toEqual(select(getNextPage, repoName))
        expect(gen.next(nextPage).value).toEqual(call(fetchContributors, repoName, nextPage))
        expect(gen.next(data).value).toEqual(put(fetchMoreContributorsSucceeded(repoName, data.contributors)))
        expect(gen.next()).toEqual({done: true, value: undefined})
      })

      it('handle error', () => {
        const gen = loadMoreContributors(repoName)

        expect(gen.next().value).toEqual(select(getNextPage, repoName))
        expect(gen.next(nextPage).value).toEqual(call(fetchContributors, repoName, nextPage))
        expect(gen.throw(error).value).toEqual(put(fetchMoreContributorsFailed(repoName, error.stack)))
        expect(gen.next()).toEqual({done: true, value: undefined})
      })
    })
  })
})
