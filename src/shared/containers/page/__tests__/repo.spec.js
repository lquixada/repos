import React from 'react'
import {shallow} from 'enzyme'

import {RepoPageContainer} from '../repo'

describe('<RepoPageContainer />', () => {
  let fetchPage
  let repoName
  let owner

  beforeEach(() => {
    owner = 'owner1'
    repoName = 'repo1'
    fetchPage = jest.fn()
  })

  it('fetches all data when owner changes', () => {
    const component = shallow(<RepoPageContainer
      owner={owner}
      repoName={repoName}
      fetchPage={fetchPage}
    />)

    component.setProps({
      owner: 'owner2'
    })

    expect(fetchPage).toBeCalledWith({
      name: 'repo',
      owner: 'owner2',
      repoName
    })
  })

  it('does not fetch all data when owner remain the same', () => {
    const component = shallow(<RepoPageContainer
      owner={owner}
      repoName={repoName}
      fetchPage={fetchPage}
    />)

    component.setProps({
      owner
    })

    expect(fetchPage).not.toBeCalled()
  })
})
