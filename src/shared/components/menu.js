import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {Icon} from './icon';

export const Menu = ({repos}) => (
  <Wrapper>
    <List>
      {repos.map((repo, i) => (
        <Item key={repo.name}>
          <NavLink to={repo.name}>
            <Icon />
            {repo.name}
            {' '}
            ({repo.totalContributors})
          </NavLink>
        </Item>
      ))}
    </List>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-top: 1.2rem;
  background-color: #fff;
  border: .1rem solid #e5e5e5;
  border-radius: .6rem;
  box-shadow: 0 .1rem .1rem rgba(0,0,0,.1);
  margin-bottom: 2rem;
  font-size: 1.2rem;
  padding: 0;
`;

const NavLink = styled(Link).attrs({
  activeClassName: 'active'
})`
  text-decoration: none;
  display: block;
  padding: .8rem 1rem;
  color: #333;
  font-size: 1.4rem;

  &:hover {
    text-decoration: none;
    color: #327fc7;
    background-color: #fdfdfd;
  }

  &.active {
    color: #333;
    border-left: .2rem solid #d26911;
    background-color: #f4f4f4;
  }
`;

const List = styled.ul`
  border-radius: .6rem;
`;

const Item = styled.li`
  list-style-type: none;
`;

