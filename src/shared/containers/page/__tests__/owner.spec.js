import React from 'react'
import {fromJS} from 'immutable'
import {shallow} from 'enzyme'

import {OwnerPageContainer} from '../owner'

describe('<OwnerPageContainer />', () => {
  let fetchPage
  let repoName
  let owner
  let counts

  beforeEach(() => {
    owner = 'owner1'
    repoName = 'repo1'
    fetchPage = jest.fn()

    counts = fromJS({
      [owner]: {
        data: [{
          name: repoName,
          count: 5
        }]
      }
    })
  })

  it('fetches all data for owner page if it is not available', () => {
    shallow(<OwnerPageContainer
      owner={owner}
      repoName={repoName}
      counts={fromJS({})}
      fetchPage={fetchPage}
    />)

    expect(fetchPage).toBeCalledWith({
      name: 'owner',
      owner
    })
  })

  it('does not fetch all data for owner page if it is available', () => {
    shallow(<OwnerPageContainer
      owner={owner}
      repoName={repoName}
      counts={counts}
      fetchPage={fetchPage}
    />)

    expect(fetchPage).not.toBeCalled()
  })

  it('fetches all data when owner changes', () => {
    const component = shallow(<OwnerPageContainer
      owner={owner}
      repoName={repoName}
      counts={counts}
      fetchPage={fetchPage}
    />)

    component.setProps({
      owner: 'owner2'
    })

    expect(fetchPage).toBeCalledWith({
      name: 'owner',
      owner: 'owner2'
    })
  })

  it('does not fetch all data when owner remain the same', () => {
    const component = shallow(<OwnerPageContainer
      owner={owner}
      repoName={repoName}
      counts={counts}
      fetchPage={fetchPage}
    />)

    component.setProps({
      owner,
      repoName: 'repo2'
    })

    expect(fetchPage).not.toBeCalled()
  })
})
