import React from 'react';
import styled from 'styled-components';

import {Icon} from './icon';

export const Menu = ({repos}) => (
  <Wrapper>
    <List>
      {repos.map((repo, i) => (
        <Item key={repo.name}>
          <A href="#" className={i===0?'active':''}>
            <Icon />
            {repo.name}
            {' '}
            ({repo.totalContributors})
          </A>
        </Item>
      ))}
    </List>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-top: 12px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
  margin-bottom: 20px;
  font-size: 12px;
  padding: 0;
`;

const A = styled.a`
  text-decoration: none;
  display: block;
  padding: 8px 10px;
  color: #333;
  font-size: 14px;

  &:hover {
    text-decoration: none;
    color: #327fc7;
    background-color: #fdfdfd;
  }

  &.active {
    color: #333;
    border-left: 2px solid #d26911;
    background-color: #f4f4f4;
  }
`;

const List = styled.ul`
  border-radius: 6px;
`;

const Item = styled.li`
  list-style-type: none;
`;

