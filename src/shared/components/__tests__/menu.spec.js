import React from 'react';
import {shallow} from 'enzyme';

import {Menu} from '../menu';

describe('<Menu />', () => {
  it('matches the snapshot', () => {
    const reposContributorsCount = [['repo1', 2], ['repo2', 5]];
    const component = shallow(<Menu reposContributorsCount={reposContributorsCount}/>);
    expect(component).toMatchSnapshot();
  });
});
