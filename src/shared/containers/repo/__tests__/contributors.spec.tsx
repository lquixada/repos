import {shallow} from 'enzyme'
import {fromJS} from 'immutable'
import React from 'react'
import {ContributorsContainer} from '../contributors'

describe('<ContributorsContainer />', () => {
  let actions
  let contributors
  let count
  let owner
  let repoName

  beforeEach(() => {
    owner = 'owner1'
    repoName = 'repo1'
    actions = {
      fetchContributors: jest.fn(),
    }

    contributors = fromJS({
      data: [
        {id: 1, login: 'user1'},
        {id: 2, login: 'user2'},
      ],
      isLoading: false,
      nextPage: 2,
    })

    count = fromJS(['repo1', 2])
  })

  it('renders null if there is no repo', () => {
    const component = shallow(
      <ContributorsContainer
        owner={owner}
        repoName={repoName}
        contributors={undefined}
        {...actions}
      />,
    )
    expect(component.html()).toBeNull()
  })

  it('renders Contributors component', () => {
    const component = shallow(
      <ContributorsContainer
        owner={owner}
        repoName={repoName}
        contributors={contributors}
        count={count}
        {...actions}
      />,
    )
    expect(component).toMatchSnapshot()
  })

  it('renders loading Contributors component', () => {
    contributors = contributors.set('isLoading', true)
    const component = shallow(
      <ContributorsContainer
        owner={owner}
        repoName={repoName}
        contributors={contributors}
        count={count}
        {...actions}
      />,
    )
    expect(component).toMatchSnapshot()
  })

  it('renders the end of Contributors component', () => {
    contributors = contributors.set('nextPage', '')
    const component = shallow(
      <ContributorsContainer
        owner={owner}
        repoName={repoName}
        contributors={contributors}
        count={count}
        {...actions}
      />,
    )
    expect(component).toMatchSnapshot()
  })

  it('fetches next load of Contributors component', () => {
    const component = shallow(
      <ContributorsContainer
        owner={owner}
        repoName={repoName}
        contributors={contributors}
        count={count}
        {...actions}
      />,
    )

    const {onNext} = component.find('Contributors').props() as {onNext(): void}
    onNext()
    expect(actions.fetchContributors).toBeCalledWith({owner: 'owner1', repoName: 'repo1'})
  })
})
