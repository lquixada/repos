import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Octicon from 'react-component-octicons';

import {Title} from './title';
import {flex} from '../../helpers';

export const Header = ({title, url}) => (
  <Wrapper>
    <Title>{title}</Title>

    <Link href={url} target="_blank">
      <Octicon name="mark-github"/>
      <span>Github</span>
    </Link>
  </Wrapper>
);

Header.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

const Wrapper = styled.header`
  ${flex.display()}
  ${flex.justify()}
  ${flex.bottom()}
  width: 100%;
  margin-bottom: 2rem;
  padding-bottom: .5rem;
  border-bottom: 1px solid #ddd;
`;

const Link = styled.a`
  ${flex.display()}
  ${flex.justify()}
  ${flex.middle()}
  margin-bottom: 1rem;
  color: #767676;
  font-size: 1.6rem;
  text-decoration: none;

  svg {
    margin-right: .3rem;
  }
`;
