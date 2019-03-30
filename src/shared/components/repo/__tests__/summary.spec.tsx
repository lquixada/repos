import {mount} from 'enzyme'
import React from 'react'

import {Summary} from '../summary'

describe('<Summary />', () => {
  it('matches the snapshot', () => {
    const repo = {
      description: 'Github Repos',
      forks_count: 5,
      html_url: 'http://github-repos/',
      license: {
        name: 'MIT',
      },
      name: 'Github Repos',
      open_issues_count: 5,
      stargazers_count: 5,
      subscribers_count: 5,
    }
    const component = mount(<Summary owner='owner1' repo={repo} />)
    expect(component).toMatchSnapshot()
  })
})
