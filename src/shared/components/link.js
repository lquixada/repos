import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import Octicon from 'react-component-octicons';

import {flex} from '../helpers';

export const Link = ({repoName, contributorsCount, isLoading}) => (
  <Wrapper to={`/r/${repoName}`}>
    <Icon name="repo" />
    <Text>
      {repoName}
      {' '}
      (<Help title="number of contributors">{contributorsCount}</Help>)
    </Text>
    {isLoading? <img src="/assets/images/loading.gif" /> : ''}
  </Wrapper>
);

Link.propTypes = {
  repoName: PropTypes.string,
  contributorsCount: PropTypes.number,
  isLoading: PropTypes.bool,
};

const Wrapper = styled(NavLink)`
  ${flex.display()}
  ${flex.flow('row', 'nowrap')};
  text-decoration: none;
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

const Icon = styled(Octicon)`
  margin-right: .5rem;
`;

const Text = styled.span`
  ${flex('1')}
`;

const Help = styled.span`
  color: #327fc7;
  font-size: 1.1rem;
  border-bottom: 1px dashed #327fc7;
  cursor: help;
`;

