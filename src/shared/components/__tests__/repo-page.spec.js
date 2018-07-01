import React from 'react'
import {shallow} from 'enzyme'

import {RepoPage} from '../repo-page'

describe('<RepoPage />', () => {
  it('matches the snapshot', () => {
    const match = {
      params: {
        repo: 'repo1'
      }
    }
    const component = shallow(<RepoPage match={match} />)
    expect(component).toMatchSnapshot()
  })
})
