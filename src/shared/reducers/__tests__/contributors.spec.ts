import {
  fetchContributors, fetchContributorsFailed, fetchContributorsSucceeded,
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
      {id: 2, login: 'user2'},
    ]
  })

  it('starts empty', () => {
    const state = reducer()
    expect(state).toEqual({})
  })

  it('switches to isLoading state', () => {
    const action = fetchContributors({owner, repoName})
    const state = reducer(undefined, action)

    expect(state[owner][repoName].isLoading).toBe(true)
    expect(state[owner][repoName].error).toBe(null)
  })

  it('sets the repo state', () => {
    const data = {
      data: [
        contributors[0],
      ],
      nextPage: 2,
    }
    const action = fetchContributorsSucceeded({owner, repoName, data})

    const prevState = {
      [owner]: {
        [repoName]: {},
      },
    }
    const state = reducer(prevState, action)

    expect(state[owner][repoName].isLoading).toBe(false)
    expect(state[owner][repoName].error).toBe(null)
    expect(state[owner][repoName].data).toEqual([contributors[0]])
    expect(state[owner][repoName].nextPage).toEqual(2)
  })

  it('sets an error state', () => {
    const action = fetchContributorsFailed({owner, repoName, error: 'some-error'})
    const prevState = {
      [owner]: {
        [repoName]: {},
      },
    }
    const state = reducer(prevState, action)

    expect(state[owner][repoName].isLoading).toBe(false)
    expect(state[owner][repoName].error).toBe('some-error')
  })
})
