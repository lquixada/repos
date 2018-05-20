import React from 'react';
import {mount} from 'enzyme';

import {Footer} from '../footer';

describe('<Footer />', () => {
  it('matches the snapshot', () => {
    const component = mount(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
