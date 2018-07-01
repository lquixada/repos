import React from 'react'
import {mount} from 'enzyme'

import {Description} from '../description'

describe('<Description />', () => {
  it('matches the snapshot', () => {
    const component = mount(<Description text='some text' />)
    expect(component).toMatchSnapshot()
  })
})
