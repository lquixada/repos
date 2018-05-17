import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import Octicon from 'react-component-octicons';

export const Link = ({to: repo}) => (
  <Wrapper to={`/${repo.name}`}>
    <Icon />
    {repo.name}
    {' '}
    (<Help title="number of contributors">{repo.contributors_count}</Help>)
  </Wrapper>
);


const Icon = styled(Octicon).attrs({
  name: 'repo'
})`
  margin-right: 1rem;
`;

const Wrapper = styled(NavLink).attrs({
  activeClassName: 'active'
})`
  text-decoration: none;
  display: block;
  padding: .8rem 1rem;
  color: #333;
  font-size: 1.2rem;
  border-left: .2rem solid transparent;

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

const Help = styled.span`
  color: #327fc7;
  font-size: 1.1rem;
  border-bottom: 1px dashed #327fc7;
  cursor: help;
`;

