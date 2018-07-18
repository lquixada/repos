import React from 'react'
import {fromJS} from 'immutable'
import {mount} from 'enzyme'

import {Summary} from '../summary'

describe('<Summary />', () => {
  it('matches the snapshot', () => {
    const repo = fromJS({
      name: 'Github Repos',
      stargazers_count: 5,
      subscribers_count: 5,
      forks_count: 5,
      open_issues_count: 5,
      license: {
        name: 'MIT'
      }
    })
    const component = mount(<Summary owner='owner1' repo={repo} />)
    expect(component).toMatchSnapshot()
  })
})
