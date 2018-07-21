import React from 'react'
import {shallow} from 'enzyme'

import {RepoPage} from '../repo'

describe('<RepoPage />', () => {
  it('renders the repo info when repo name is given', () => {
    const component = shallow(<RepoPage repoName='repo1' />)
    expect(component).toMatchSnapshot()
  })

  it('renders a selection message when repo name is not given', () => {
    const component = shallow(<RepoPage />)
    expect(component).toMatchSnapshot()
  })
})
