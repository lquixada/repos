import {shallow} from 'enzyme'
import {fromJS} from 'immutable'
import React from 'react'

import {RepoPageContainer} from '../repo'

describe('<RepoPageContainer />', () => {
  let fetchPage
  let repoName
  let owner
  let counts

  beforeEach(() => {
    owner = 'owner1'
    repoName = 'repo1'
    fetchPage = jest.fn()
    counts = {
      [owner]: {
        data: [
          {name: repoName, count: 5},
        ],
      },
    }
  })

  it('fetches all data when counts is not loaded', () => {
    shallow(<RepoPageContainer
      owner={owner}
      repoName={repoName}
      counts={{}}
      fetchPage={fetchPage}
    />)

    expect(fetchPage).toBeCalledWith({
      name: 'repo',
      owner,
      repoName,
    })
  })

  it('does not fetch all data when counts is already loaded', () => {
    shallow(<RepoPageContainer
      owner={owner}
      repoName={repoName}
      counts={counts}
      fetchPage={fetchPage}
    />)

    expect(fetchPage).not.toBeCalled()
  })

  it('fetches all data when owner changes', () => {
    const component = shallow(<RepoPageContainer
      owner={owner}
      repoName={repoName}
      counts={counts}
      fetchPage={fetchPage}
    />)

    component.setProps({
      owner: 'owner2',
    })

    expect(fetchPage).toBeCalledWith({
      name: 'repo',
      owner: 'owner2',
      repoName,
    })
  })

  it('does not fetch all data when owner remain the same', () => {
    const component = shallow(<RepoPageContainer
      owner={owner}
      repoName={repoName}
      counts={counts}
      fetchPage={fetchPage}
    />)

    component.setProps({
      owner,
    })

    expect(fetchPage).not.toBeCalled()
  })
})
