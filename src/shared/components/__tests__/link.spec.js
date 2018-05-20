import React from 'react';
import {shallow} from 'enzyme';

import {Link} from '../link';

describe('<Link />', () => {
  it('matches the snapshot', () => {
    const component = shallow(<Link repoName="Facebook Repos" contributorsCount={10} />);
    expect(component).toMatchSnapshot();
  });
});
