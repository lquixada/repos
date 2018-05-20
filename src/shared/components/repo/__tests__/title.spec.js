import React from 'react';
import {mount} from 'enzyme';

import {Title} from '../title';

describe('<Title />', () => {
  it('matches the snapshot', () => {
    const component = mount(<Title>Facebook Repos</Title>);
    expect(component).toMatchSnapshot();
  });
});
