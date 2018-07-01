import React from 'react'
import {fromJS} from 'immutable'
import {shallow} from 'enzyme'
import {ContributorsContainer} from '../contributors'

describe('<ContributorsContainer />', () => {
  let actions
  let contributors
  let count
  let repoName

  beforeEach(() => {
    repoName = 'repo1'
    actions = {
      fetchContributors: jest.fn(),
      fetchMoreContributors: jest.fn()
    }

    contributors = fromJS({
      isLoading: false,
      next: 'http://next-url/',
      data: [
        {id: 1, login: 'user1'},
        {id: 2, login: 'user2'}
      ]
    })

    count = fromJS(['repo1', 2])
  })

  it('renders null if there is no repo', () => {
    const component = shallow(
      <ContributorsContainer
        repoName={repoName}
        contributors={undefined}
        {...actions}
      />
    )
    expect(component.html()).toBeNull()
  })

  it('renders Contributors component', () => {
    const component = shallow(
      <ContributorsContainer
        repoName={repoName}
        contributors={contributors}
        count={count}
        {...actions}
      />
    )
    expect(component).toMatchSnapshot()
  })

  it('renders loading Contributors component', () => {
    contributors = contributors.set('isLoading', true)
    const component = shallow(
      <ContributorsContainer
        repoName={repoName}
        contributors={contributors}
        count={count}
        {...actions}
      />
    )
    expect(component).toMatchSnapshot()
  })

  it('renders the end of Contributors component', () => {
    contributors = contributors.set('next', '')
    const component = shallow(
      <ContributorsContainer
        repoName={repoName}
        contributors={contributors}
        count={count}
        {...actions}
      />
    )
    expect(component).toMatchSnapshot()
  })

  it('fetches first load of Contributors component', () => {
    shallow(
      <ContributorsContainer
        repoName={repoName}
        count={count}
        {...actions}
      />
    )

    expect(actions.fetchContributors).toBeCalledWith('repo1')
  })

  it('fetches next load od Contributors component', () => {
    const component = shallow(
      <ContributorsContainer
        repoName={repoName}
        contributors={contributors}
        count={count}
        {...actions}
      />
    )

    const {onNext} = component.find('Contributors').props()
    onNext()
    expect(actions.fetchMoreContributors).toBeCalledWith('repo1')
  })
})
