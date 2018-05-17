import React from 'react';
import styled from 'styled-components';

export const Description = ({repo=null}) => (
  <P>{repo.description}</P>
);

const P = styled.p`
  color: #393939;
  font-size: 1.4rem;
  line-height: 1.5;
`;
