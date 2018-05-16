import React from 'react';
import styled from 'styled-components';

import {flex} from '../helpers';

export default class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        Facebook Repos
      </Wrapper>
    );
  }
}

export const Wrapper = styled.header`
  ${flex.display()}
  ${flex.center()}
  ${flex('none')}
  padding: 2rem;
  background-color: #565656;
`;
