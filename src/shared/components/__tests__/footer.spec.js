import React from 'react'
import {shallow} from 'enzyme'

import {Footer} from '../footer'

describe('<Footer />', () => {
  it('matches the snapshot', () => {
    const component = shallow(<Footer />)
    expect(component).toMatchSnapshot()
  })
})
