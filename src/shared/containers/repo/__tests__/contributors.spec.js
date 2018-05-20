import React from 'react';
import {shallow} from 'enzyme';
import {ContributorsContainer} from '../contributors';

describe('<ContributorsContainer />', () => {
  let actions;
  let contributors;
  let repoName;

  beforeEach(() => {
    repoName = 'repo1';
    actions = {
      fetchContributors: jest.fn(),
      fetchMoreContributors: jest.fn()
    };

    contributors = {
      isLoading: false,
      next: 'http://next-url/',
      data: [
        {id: 1, login: 'user1'},
        {id: 2, login: 'user2'},
      ]
    };
  });

  it('renders null if there is no repo', () => {
    const component = shallow(
      <ContributorsContainer
        repoName={repoName}
        contributors={undefined}
        {...actions}
      />
    );
    expect(component.html()).toBeNull();
  });

  it('renders Contributors component', () => {
    const component = shallow(
      <ContributorsContainer
        repoName={repoName}
        contributors={contributors}
        count={['repo1', 2]}
        {...actions}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('renders loading Contributors component', () => {
    contributors.isLoading = true;
    const component = shallow(
      <ContributorsContainer
        repoName={repoName}
        contributors={contributors}
        count={['repo1', 2]}
        {...actions}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('renders the end of Contributors component', () => {
    contributors.next = '';
    const component = shallow(
      <ContributorsContainer
        repoName={repoName}
        contributors={contributors}
        count={['repo1', 2]}
        {...actions}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('fetches first load od Contributors component', () => {
    const component = shallow(
      <ContributorsContainer
        repoName={repoName}
        contributors={contributors}
        count={['repo1', 2]}
        {...actions}
      />
    );

    component.setProps({
      repoName: 'repo2',
      contributors: undefined, // at this point there's any data from the new repo available
    });

    expect(actions.fetchContributors).toBeCalledWith('repo2');
  });

  it('fetches next load od Contributors component', () => {
    const component = shallow(
      <ContributorsContainer
        repoName={repoName}
        contributors={contributors}
        count={['repo1', 2]}
        {...actions}
      />
    );

    const {onNext} = component.find('Contributors').props();
    onNext();
    expect(actions.fetchMoreContributors).toBeCalledWith('repo1', 'http://next-url/');
  });
});
