import React from 'react';
import {fromJS} from 'immutable';
import {shallow} from 'enzyme';

import {Menu} from '../menu';

describe('<Menu />', () => {
  it('matches the snapshot', () => {
    const reposContributorsCount = fromJS([['repo1', 2], ['repo2', 5]]);
    const component = shallow(<Menu reposContributorsCount={reposContributorsCount}/>);
    expect(component).toMatchSnapshot();
  });
});
