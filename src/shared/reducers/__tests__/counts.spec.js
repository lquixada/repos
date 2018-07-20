import {fetchCounts, fetchCountsSucceeded, fetchCountsFailed} from '../../actions'
import reducer from '../counts'

describe('Reducers (Counts)', () => {
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
    const action = fetchCounts(owner)
    const state = reducer(undefined, action)

    expect(state.getIn([owner, 'isLoading'])).toBe(true)
    expect(state.getIn([owner, 'error'])).toBe(null)
  })

  it('sets the counts state', () => {
    const data = [{name: repoName, count: 2}, {name: 'repo2', count: 5}]
    const action = fetchCountsSucceeded({owner, data})
    const state = reducer(undefined, action)

    expect(state.toJS()).toMatchSnapshot()
  })

  it('sets an error state', () => {
    const action = fetchCountsFailed(owner, 'some-error')
    const state = reducer(undefined, action)

    expect(state.getIn([owner, 'isLoading'])).toBe(false)
    expect(state.getIn([owner, 'error'])).toBe('some-error')
  })
})
