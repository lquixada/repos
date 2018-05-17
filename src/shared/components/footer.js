import React from 'react';
import styled from 'styled-components';

export const Footer = () => (
  <Wrapper>
    <Link href="https://facebook.com/lquixada/">Facebook</Link>
    {' '}|{' '}
    <Link href="https://github.com/lquixada/">Github</Link>
    {' '}|{' '}
    <Link href="https://twitter.com/lquixada/">Twitter</Link>
    <br/>
    © Copyright 2016 Leonardo Quixadá. All rights reserved.
  </Wrapper>
);

const Wrapper = styled.footer`
  margin: 1rem 0;
  padding: 0 1rem;
  color: #767676;
  opacity: .9;
  font-size: 1rem;
  line-height: 1.5;
`;

const Link = styled.a`
  margin-bottom: 1rem;
  color: #767676;
  font-size: 1rem;
  text-decoration: none;
`;
