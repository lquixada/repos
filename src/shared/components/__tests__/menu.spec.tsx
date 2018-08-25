import {shallow} from 'enzyme'
import React from 'react'

import {Menu} from '../menu'

describe('<Menu />', () => {
  it('matches the snapshot', () => {
    const items: Array<[string, number, boolean]> = [
      ['repo1', 2, false],
    ['repo2', 5, false],
    ]
    const component = shallow(<Menu owner='some-owner' items={items} />)
    expect(component).toMatchSnapshot()
  })
})
