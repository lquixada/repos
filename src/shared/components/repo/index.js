import React from 'react';
import styled from 'styled-components';
import Octicon from 'react-component-octicons';

import {Header} from './header';
import {flex} from '../../helpers';

export const Repo = ({repo=null}) => (
  repo &&
    <div>
      <Header repo={repo} />

      <P>{repo.description}</P>

      <List>
        <Item><Octicon name="star"/> {repo.stargazers_count} stars</Item>
        <Item><Octicon name="eye"/> {repo.watchers_count} watchers</Item>
        <Item><Octicon name="repo-forked"/> {repo.forks_count} forks</Item>
        <Item><Octicon name="issue-opened"/> {repo.open_issues_count} issues</Item>
        <Item><Octicon name="law"/> {repo.license.spdx_id}</Item>
      </List>

      {console.log(repo)}
    </div>
);

const P = styled.p`
  color: #393939;
  font-size: 1.4rem;
  line-height: 1.5;
`;

const List = styled.ul`
  ${flex.display()}
  ${flex.justify()}
  ${flex.flow('row', 'nowrap')};
  margin-top: 2rem;
  padding: 1rem 2rem;
  list-style-type: none;
  border: 1px solid #e5e5e5;
  border-radius: .6rem;
`;

const Item = styled.li`
  ${flex.display()}
  ${flex.justify()}
  ${flex.middle()}
  list-style-type: none;
  font-size: 1.2rem;
  white-space: nowrap;

  svg {
    margin-right: .5rem;
  }
`;
