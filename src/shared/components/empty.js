import React from 'react';
import styled from 'styled-components';

import {flex} from '../helpers';

export const Empty = () => (
  <Wrapper>
    Choose a repository on the menu.
  </Wrapper>
);

const Wrapper = styled.div`
  ${flex.display()}
  ${flex.middle()} 
  ${flex.center()}
  height: 50rem;
  border: .7rem dashed #eee;
  border-radius: .6rem;
  font-size: 1.4rem;
  letter-spacing: -.1px;
`;

