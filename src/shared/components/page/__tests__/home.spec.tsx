import {shallow} from 'enzyme'
import React from 'react'

import {HomePage} from '../home'

describe('<HomePage />', () => {
  it('matches the snapshot', () => {
    const component = shallow(<HomePage />)
    expect(component).toMatchSnapshot()
  })
})
