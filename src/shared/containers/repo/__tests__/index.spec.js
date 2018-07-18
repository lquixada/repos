import React from 'react'
import {fromJS} from 'immutable'
import {shallow} from 'enzyme'

import {RepoContainer} from '../index'

describe('<RepoContainer />', () => {
  let fetchRepo
  let repo

  beforeEach(() => {
    fetchRepo = jest.fn()

    repo = fromJS({
      data: {
        name: 'repo1'
      }
    })
  })

  it('renders null if there is no repo', () => {
    const component = shallow(<RepoContainer owner='owner1' name='repo1' fetchRepo={fetchRepo} />)
    expect(component).toMatchSnapshot()
  })

  it('renders Repo component', () => {
    const component = shallow(<RepoContainer owner='owner1' name='repo1' fetchRepo={fetchRepo} repo={repo} />)
    expect(component.find('Repo').prop('repo').toJS()).toEqual(repo.get('data').toJS())
  })

  it('fetches other Repo component', () => {
    const component = shallow(<RepoContainer owner='owner1' name='repo1' fetchRepo={fetchRepo} repo={repo} />)

    component.setProps({
      repo: undefined, // at this point there's any data from the new repo available
      name: 'repo2'
    })

    expect(fetchRepo).toBeCalledWith({owner: 'owner1', repoName: 'repo2'})
  })
})
