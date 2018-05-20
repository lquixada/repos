import React from 'react';
import {mount} from 'enzyme';

import {Contributors} from '../contributors';

describe('<Contributors />', () => {
  it('list contributors', () => {
    const data = [
      {login: 'user1', html_url: 'https://user1/",', avatar: 'https://avatars1/'},
      {login: 'user2', html_url: 'https://user2/",', avatar: 'https://avatars2/'},
      {login: 'user3', html_url: 'https://user3/",', avatar: 'https://avatars3/'}
    ];
    const component = mount(<Contributors
      total={3}
      data={data}
      hasLoaded={true}
      hasMore={true}
      isLoadingMore={false}
      onNext={(f) => f}
    />);
    expect(component).toMatchSnapshot();
  });

  it('shows loading', () => {
    const component = mount(<Contributors total={3} hasLoaded={false} />);
    expect(component).toMatchSnapshot();
  });

  it('show button More', () => {
    const component = mount(<Contributors
      total={3}
      data={[]}
      hasLoaded={true}
      hasMore={true}
      isLoadingMore={false}
      onNext={(f) => f}
    />);
    expect(component).toMatchSnapshot();
  });

  it('show button Loading', () => {
    const component = mount(<Contributors
      total={3}
      data={[]}
      hasLoaded={true}
      hasMore={true}
      isLoadingMore={false}
      onNext={(f) => f}
    />);
    expect(component).toMatchSnapshot();
  });
});