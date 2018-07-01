import {fetchRepo, fetchRepoSucceeded, fetchRepoFailed} from '../../actions'
import reducer from '../repo'

describe('Reducers (Repo)', () => {
  let repoName

  beforeEach(() => {
    repoName = 'repo1'
  })

  it('starts empty', () => {
    const state = reducer()
    expect(state.toJS()).toEqual({})
  })

  it('switches to isLoading state', () => {
    const action = fetchRepo(repoName)
    const state = reducer(undefined, action)

    expect(state.getIn([repoName, 'isLoading'])).toBe(true)
    expect(state.getIn([repoName, 'error'])).toBe(null)
  })

  it('sets the repo state', () => {
    const data = {
      id: 1,
      name: repoName
    }
    const action = fetchRepoSucceeded(repoName, data)
    const state = reducer(undefined, action)

    expect(state.getIn([repoName, 'isLoading'])).toBe(false)
    expect(state.getIn([repoName, 'error'])).toBe(null)
    expect(state.getIn([repoName, 'data']).toJS()).toEqual(data)
  })

  it('sets an error state', () => {
    const action = fetchRepoFailed(repoName, 'some-error')
    const state = reducer(undefined, action)

    expect(state.getIn([repoName, 'isLoading'])).toBe(false)
    expect(state.getIn([repoName, 'error'])).toBe('some-error')
  })
})
