import React from 'react'
import {shallow} from 'enzyme'

import {OwnerPage} from '../owner-page'

describe('<OwnerPage />', () => {
  it('matches the snapshot', () => {
    const component = shallow(<OwnerPage />)
    expect(component).toMatchSnapshot()
  })
})
