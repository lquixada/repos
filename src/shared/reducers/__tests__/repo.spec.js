import {fetchRepo, fetchRepoSucceeded, fetchRepoFailed} from '../../actions'
import reducer from '../repo'

describe('Reducers (Repo)', () => {
  let owner
  let repoName

  beforeEach(() => {
    owner = 'owner1'
    repoName = 'repo1'
  })

  it('starts empty', () => {
    const state = reducer()
    expect(state.toJS()).toEqual({})
  })

  it('switches to isLoading state', () => {
    const action = fetchRepo({owner, repoName})
    const state = reducer(undefined, action)

    expect(state.getIn([owner, repoName, 'isLoading'])).toBe(true)
    expect(state.getIn([owner, repoName, 'error'])).toBe(null)
  })

  it('sets the repo state', () => {
    const data = {
      id: 1,
      name: repoName
    }
    const action = fetchRepoSucceeded({owner, repoName, data})
    const state = reducer(undefined, action)

    expect(state.getIn([owner, repoName, 'isLoading'])).toBe(false)
    expect(state.getIn([owner, repoName, 'error'])).toBe(null)
    expect(state.getIn([owner, repoName, 'data']).toJS()).toEqual(data)
  })

  it('sets an error state', () => {
    const action = fetchRepoFailed(owner, repoName, 'some-error')
    const state = reducer(undefined, action)

    expect(state.getIn([owner, repoName, 'isLoading'])).toBe(false)
    expect(state.getIn([owner, repoName, 'error'])).toBe('some-error')
  })
})
