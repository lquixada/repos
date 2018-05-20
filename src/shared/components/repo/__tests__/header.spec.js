import React from 'react';
import {mount} from 'enzyme';

import {Header} from '../header';

describe('<Header />', () => {
  it('matches the snapshot', () => {
    const component = mount(<Header title="Facebook Repos" url="http://facebook-repos/" />);
    expect(component).toMatchSnapshot();
  });
});
