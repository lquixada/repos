import {shallow} from 'enzyme'
import React from 'react'

import {RepoContainer} from '../index'

describe('<RepoContainer />', () => {
  let fetchRepo
  let repo

  beforeEach(() => {
    fetchRepo = jest.fn()

    repo = {
      data: {
        name: 'repo1',
      },
    }
  })

  it('renders null if there is no repo', () => {
    const component = shallow(<RepoContainer owner='owner1' repoName='repo1' fetchRepo={fetchRepo} repo={undefined} />)
    expect(component).toMatchSnapshot()
  })

  it('renders Repo component', () => {
    const component = shallow(<RepoContainer owner='owner1' repoName='repo1' fetchRepo={fetchRepo} repo={repo} />)
    const repoProp = component.find('Repo').prop('repo') as any
    expect(repoProp).toEqual(repo.data)
  })

  it('fetches other Repo component', () => {
    const component = shallow(<RepoContainer owner='owner1' repoName='repo1' fetchRepo={fetchRepo} repo={repo} />)

    component.setProps({
      repo: undefined, // at this point there's any data from the new repo available
      repoName: 'repo2',
    })

    expect(fetchRepo).toBeCalledWith({owner: 'owner1', repoName: 'repo2'})
  })
})
