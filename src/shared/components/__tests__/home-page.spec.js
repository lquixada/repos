import React from 'react';
import {shallow} from 'enzyme';

import {HomePage} from '../home-page';

describe('<HomePage />', () => {
  it('matches the snapshot', () => {
    const component = shallow(<HomePage />);
    expect(component).toMatchSnapshot();
  });
});
