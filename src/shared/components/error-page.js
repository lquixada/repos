import React from 'react';
import styled from 'styled-components';

import {Title} from './title';
import {Main, Content, Header, HeaderContainer, Section, SectionContainer} from './grid';

export const ErrorPage = ({message}) => (
  <Main>
    <Header>
      <HeaderContainer>
        <Title />
      </HeaderContainer>
    </Header>

    <Section>
      <SectionContainer>
        <Content>
          <P>Whoops, looks like an error occurred.</P>
          {message && <pre>{message}</pre>}
        </Content>
      </SectionContainer>
    </Section>
  </Main>
);

const P = styled.p`
  margin-bottom: 1rem;
  font-size: 4rem;
  font-weight: lighter;
  letter-spacing: -.1rem;
`;
