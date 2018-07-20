import React from 'react'
import {shallow} from 'enzyme'

import {AboutPage} from '../about'

describe('<AboutPage />', () => {
  it('matches the snapshot', () => {
    const component = shallow(<AboutPage />)
    expect(component).toMatchSnapshot()
  })
})
