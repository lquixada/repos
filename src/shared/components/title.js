import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Title = () => (
  <Wrapper><NavLink to="/"><strong>Facebook</strong> Repos</NavLink></Wrapper>
);

const Wrapper = styled.h1`
  color: #fff;
  opacity: .9;
  font-size: 3rem;
  font-weight: normal;
  letter-spacing: -1px;
`;

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
