import {fromJS} from 'immutable'
import {
  fetchContributors, fetchContributorsSucceeded, fetchContributorsFailed
} from '../../actions'
import reducer from '../contributors'

describe('Reducers (Contributors)', () => {
  let owner
  let repoName
  let contributors

  beforeEach(() => {
    owner = 'owner1'
    repoName = 'repo1'
    contributors = [
      {id: 1, login: 'user1'},
      {id: 2, login: 'user2'}
    ]
  })

  it('starts empty', () => {
    const state = reducer()
    expect(state.toJS()).toEqual({})
  })

  it('switches to isLoading state', () => {
    const action = fetchContributors({owner, repoName})
    const state = reducer(undefined, action)

    expect(state.getIn([owner, repoName, 'isLoading'])).toBe(true)
    expect(state.getIn([owner, repoName, 'error'])).toBe(null)
  })

  it('sets the repo state', () => {
    const data = {
      nextPage: 2,
      data: [
        contributors[0]
      ]
    }
    const action = fetchContributorsSucceeded({owner, repoName, data})

    const prevState = fromJS({
      [owner]: {
        [repoName]: {}
      }
    })
    const state = reducer(prevState, action)

    expect(state.getIn([owner, repoName, 'isLoading'])).toBe(false)
    expect(state.getIn([owner, repoName, 'error'])).toBe(null)
    expect(state.getIn([owner, repoName, 'data']).toJS()).toEqual([contributors[0]])
    expect(state.getIn([owner, repoName, 'nextPage'])).toEqual(2)
  })

  it('sets an error state', () => {
    const action = fetchContributorsFailed(owner, repoName, 'some-error')
    const prevState = fromJS({
      [owner]: {
        [repoName]: {}
      }
    })
    const state = reducer(prevState, action)

    expect(state.getIn([owner, repoName, 'isLoading'])).toBe(false)
    expect(state.getIn([owner, repoName, 'error'])).toBe('some-error')
  })
})
