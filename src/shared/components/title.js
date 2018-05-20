import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Title = () => (
  <h1>
    <NavLink to="/">
      <Image src="/images/logo.jpg" />
    </NavLink>
  </h1>
);

const NavLink = styled(Link)`
  display: inline-block;
  font-size: 1rem;
  text-decoration: none;
`;

const Image = styled.img`
  height: 4.5rem;
  vertical-align: middle;
`;
