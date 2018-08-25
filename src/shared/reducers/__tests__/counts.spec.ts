import {fetchCounts, fetchCountsFailed, fetchCountsSucceeded} from '../../actions'
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
    expect(state).toEqual({})
  })

  it('switches to isLoading state', () => {
    const action = fetchCounts(owner)
    const state = reducer(undefined, action)

    expect(state[owner].isLoading).toBe(true)
    expect(state[owner].error).toBe(null)
  })

  it('sets the counts state', () => {
    const data = [{name: repoName, count: 2}, {name: 'repo2', count: 5}]
    const action = fetchCountsSucceeded({owner, data})
    const state = reducer(undefined, action)

    expect(state).toMatchSnapshot()
  })

  it('sets an error state', () => {
    const action = fetchCountsFailed({owner, error: 'some-error'})
    const state = reducer(undefined, action)

    expect(state[owner].isLoading).toBe(false)
    expect(state[owner].error).toBe('some-error')
  })
})
