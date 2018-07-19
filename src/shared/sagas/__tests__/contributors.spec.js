import {put, call, take, fork, select} from 'redux-saga/effects'
import {fetchContributors} from '../../helpers'
import {
  MORE_CONTRIBUTORS_REQUESTED,
  fetchMoreContributorsSucceeded, fetchMoreContributorsFailed
} from '../../actions'
import watchMoreContributors, {
  loadMoreContributors
} from '../contributors'
import {getNextPage} from '../../selectors'

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

  describe('More Contributors', () => {
    let nextPage

    beforeEach(() => {
      nextPage = 2
    })

    describe('watchMoreContributors', () => {
      it('watches repo', () => {
        const action = {payload: {owner, repoName}}
        const gen = watchMoreContributors()

        expect(gen.next().value).toEqual(take(MORE_CONTRIBUTORS_REQUESTED))
        expect(gen.next(action).value).toEqual(fork(loadMoreContributors, {owner, repoName}))
      })
    })

    describe('loadMoreContributors', () => {
      it('loads more contributors', () => {
        const gen = loadMoreContributors({owner, repoName})

        expect(gen.next().value).toEqual(select(getNextPage, repoName))
        expect(gen.next(nextPage).value).toEqual(call(fetchContributors, {owner, repoName, page: nextPage}))
        expect(gen.next(data).value).toEqual(put(fetchMoreContributorsSucceeded({owner, repoName, data: data.contributors})))
        expect(gen.next()).toEqual({done: true, value: undefined})
      })

      it('handle error', () => {
        const gen = loadMoreContributors({owner, repoName})

        expect(gen.next().value).toEqual(select(getNextPage, repoName))
        expect(gen.next(nextPage).value).toEqual(call(fetchContributors, {owner, repoName, page: nextPage}))
        expect(gen.throw(error).value).toEqual(put(fetchMoreContributorsFailed(repoName, error.stack)))
        expect(gen.next()).toEqual({done: true, value: undefined})
      })
    })
  })
})
