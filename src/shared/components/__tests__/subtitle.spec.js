import React from 'react'
import {mount} from 'enzyme'

import {Subtitle} from '../subtitle'

describe('<Subtitle />', () => {
  it('matches the snapshot', () => {
    const component = mount(<Subtitle>Facebook Repos</Subtitle>)
    expect(component).toMatchSnapshot()
  })
})
