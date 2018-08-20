import {shallow} from 'enzyme'
import React from 'react'

import {Link} from '../link'

describe('<Link />', () => {
  it('matches the snapshot', () => {
    const component = shallow(<Link owner='owner1' repoName='repo1' contributorsCount={10} />)
    expect(component).toMatchSnapshot()
  })
})
