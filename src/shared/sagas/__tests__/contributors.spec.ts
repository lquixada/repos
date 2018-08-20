import {call, fork, put, select, take} from 'redux-saga/effects'
import {
  CONTRIBUTORS_REQUESTED,
  fetchContributorsFailed, fetchContributorsSucceeded,
} from '../../actions'
import {fetchContributors} from '../../helpers'
import {getNextPage} from '../../selectors'
import watchContributors, {loadContributors} from '../contributors'

describe('Sagas (Contributors)', () => {
  let data
  let error
  let owner
  let repoName

  beforeEach(() => {
    data = {contributors: {key: 'value'}}
    error = {stack: 'file.js:1:2'}
    owner = 'owner1'
    repoName = 'repo1'
  })

  describe('Contributors', () => {
    let nextPage

    beforeEach(() => {
      nextPage = 2
    })

    describe('watchContributors', () => {
      it('watches repo', () => {
        const action = {payload: {owner, repoName}}
        const gen = watchContributors()

        expect(gen.next().value).toEqual(take(CONTRIBUTORS_REQUESTED))
        expect(gen.next(action).value).toEqual(fork(loadContributors, {owner, repoName}))
      })
    })

    describe('loadContributors', () => {
      it('loads contributors', () => {
        const gen = loadContributors({owner, repoName})

        expect(gen.next().value).toEqual(select(getNextPage, owner, repoName))
        expect(gen.next(nextPage).value).toEqual(call(fetchContributors, {owner, repoName, page: nextPage}))
        expect(gen.next(data).value).toEqual(put(fetchContributorsSucceeded({
          data: data.contributors,
          owner,
          repoName,
        })))
        expect(gen.next()).toEqual({done: true, value: undefined})
      })

      it('handle error', () => {
        const gen = loadContributors({owner, repoName})

        expect(gen.next().value).toEqual(select(getNextPage, owner, repoName))
        expect(gen.next(nextPage).value).toEqual(call(fetchContributors, {owner, repoName, page: nextPage}))
        expect(gen.throw && gen.throw(error).value).toEqual(put(fetchContributorsFailed(owner, repoName, error.stack)))
        expect(gen.next()).toEqual({done: true, value: undefined})
      })
    })
  })
})
