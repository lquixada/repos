import React from 'react';
import {shallow} from 'enzyme';
import {RepoContainer} from '../index';

describe('<RepoContainer />', () => {
  let fetchRepo;
  let match;
  let repo;

  beforeEach(() => {
    fetchRepo = jest.fn();

    match = {
      params: {
        repo: 'repo1'
      }
    };

    repo = {
      data: {
        name: 'repo1'
      }
    };
  });

  it('renders null if there is no repo', () => {
    const component = shallow(<RepoContainer match={match} fetchRepo={fetchRepo} />);
    expect(component.html()).toBeNull();
  });

  it('renders Repo component', () => {
    const component = shallow(<RepoContainer repo={repo} match={match} fetchRepo={fetchRepo} />);
    expect(component.find('Repo').prop('repo')).toEqual(repo.data);
  });

  it('fetches other Repo component', () => {
    const newMatch = {
      params: {
        repo: 'repo2'
      }
    };

    const component = shallow(<RepoContainer repo={repo} match={match} fetchRepo={fetchRepo} />);

    component.setProps({
      repo: undefined, // at this point there's any data from the new repo available
      match: newMatch
    });

    expect(fetchRepo).toBeCalledWith('repo2');
  });
});
