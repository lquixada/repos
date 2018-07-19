import {fetchReposSucceeded} from '../../actions'
import reducer from '../counts'

describe('Reducers (Counts)', () => {
  it('starts empty', () => {
    const state = reducer()
    expect(state.toJS()).toEqual({})
  })

  it('sets the repos state', () => {
    const owner = 'owner1'
    const data = [{name: 'repo1', count: 2}]
    const action = fetchReposSucceeded({owner, data})
    const state = reducer(undefined, action)

    expect(state.toJS()).toMatchSnapshot()
  })
})
