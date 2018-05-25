import React from 'react';
import {fromJS} from 'immutable';
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

    repo = fromJS({
      data: {
        name: 'repo1'
      }
    });
  });

  it('renders null if there is no repo', () => {
    const component = shallow(<RepoContainer match={match} fetchRepo={fetchRepo} />);
    expect(component).toMatchSnapshot();
  });

  it('renders Repo component', () => {
    const component = shallow(<RepoContainer repo={repo} match={match} fetchRepo={fetchRepo} />);
    expect(component.find('Repo').prop('repo').toJS()).toEqual(repo.get('data').toJS());
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
