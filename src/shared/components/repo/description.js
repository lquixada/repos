import React from 'react';
import styled from 'styled-components';

export const Description = ({text}) => (
  <P>{text}</P>
);

const P = styled.p`
  color: #393939;
  font-size: 1.4rem;
  line-height: 1.5;
`;
