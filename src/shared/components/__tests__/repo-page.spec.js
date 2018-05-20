import React from 'react';
import {shallow} from 'enzyme';

import {RepoPage} from '../repo-page';

describe('<RepoPage />', () => {
  it('matches the snapshot', () => {
    const component = shallow(<RepoPage />);
    expect(component).toMatchSnapshot();
  });
});
