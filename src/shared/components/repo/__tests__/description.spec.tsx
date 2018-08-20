import {mount} from 'enzyme'
import React from 'react'

import {Description} from '../description'

describe('<Description />', () => {
  it('matches the snapshot', () => {
    const component = mount(<Description text='some text' />)
    expect(component).toMatchSnapshot()
  })
})
