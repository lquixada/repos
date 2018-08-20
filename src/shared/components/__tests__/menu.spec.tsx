import {shallow} from 'enzyme'
import {fromJS} from 'immutable'
import React from 'react'

import {Menu} from '../menu'

describe('<Menu />', () => {
  it('matches the snapshot', () => {
    const reposContributorsCount = fromJS([['repo1', 2], ['repo2', 5]])
    const component = shallow(<Menu items={reposContributorsCount} />)
    expect(component).toMatchSnapshot()
  })
})
