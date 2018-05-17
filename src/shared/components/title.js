import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Title = () => (
  <Wrapper>
    <NavLink to="/">
      <Strong>Facebook</Strong> Repos
    </NavLink>
  </Wrapper>
);

const Wrapper = styled.h1`
  color: #fff;
  opacity: .9;
  font-size: 3rem;
  font-weight: normal;
  letter-spacing: -2px;
`;

const Strong = styled.strong`
  font-weight: normal;
`;

const NavLink = styled(Link)`
  color: inherit;
  font-weight: 100;
  text-decoration: none;
`;
