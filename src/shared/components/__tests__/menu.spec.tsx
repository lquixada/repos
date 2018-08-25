import {shallow} from 'enzyme'
import React from 'react'

import {Menu} from '../menu'

describe('<Menu />', () => {
  it('matches the snapshot', () => {
    const reposContributorsCount = [['repo1', 2, false], ['repo2', 5, false]]
    const component = shallow(<Menu items={reposContributorsCount} />)
    expect(component).toMatchSnapshot()
  })
})
