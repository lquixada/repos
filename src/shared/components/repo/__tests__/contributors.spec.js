import React from 'react';
import {mount} from 'enzyme';

import {Contributors} from '../contributors';

describe('<Contributors />', () => {
  it('list contributors', () => {
    const data = [
      {login: 'lquixada1', html_url: 'https://lquixada1/",', avatar: 'https://avatars1/'},
      {login: 'lquixada2', html_url: 'https://lquixada2/",', avatar: 'https://avatars2/'},
      {login: 'lquixada3', html_url: 'https://lquixada3/",', avatar: 'https://avatars3/'}
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
