import React from 'react';
import styled from 'styled-components';

import {Link} from './link';

export const Menu = ({repos}) => (
  <Wrapper>
    <List>
      {repos.map((repo) => (
        <Item key={repo.name}>
          <Link to={repo} />
        </Item>
      ))}
    </List>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-top: 1.2rem;
  background-color: #fff;
  border: .1rem solid #e5e5e5;
  border-radius: .6rem;
  box-shadow: 0 .1rem .1rem rgba(0,0,0,.1);
  margin-bottom: 2rem;
  font-size: 1.2rem;
  padding: 0;
`;

const List = styled.ul`
  border-radius: .6rem;
`;

const Item = styled.li`
  list-style-type: none;
`;

