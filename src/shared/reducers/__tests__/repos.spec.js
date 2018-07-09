import {fetchReposSucceeded} from '../../actions'
import reducer from '../repos'

describe('Reducers (Repos)', () => {
  it('starts empty', () => {
    const state = reducer()
    expect(state.toJS()).toEqual({})
  })

  it('sets the repos state', () => {
    const data = [['repo1', 2]]
    const action = fetchReposSucceeded(data)
    const state = reducer(undefined, action)

    expect(state.toJS()).toMatchSnapshot()
  })
})
