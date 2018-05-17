import React from 'react';
import styled from 'styled-components';

import {Title} from './title';

export const Repo = ({repo=null}) => (
  repo &&
    <Wrapper>
      <Title>{repo.name}</Title>
      <pre>
        {JSON.stringify(repo, null, '\t')}
      </pre>
    </Wrapper>
);

const Wrapper = styled.div`
  color: red;
`;
