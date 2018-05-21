import React from 'react';
import styled from 'styled-components';

import {Title} from './title';
import {Main, Content, Header, HeaderContainer, Section, SectionContainer} from './grid';

export const NotFoundPage = () => (
  <Main>
    <Header>
      <HeaderContainer>
        <Title />
      </HeaderContainer>
    </Header>

    <Section>
      <SectionContainer>
        <Content>
          <Wrapper>Whoops, looks like that page doesn't exist.</Wrapper>
        </Content>
      </SectionContainer>
    </Section>
  </Main>
);

const Wrapper = styled.p`
  font-size: 4rem;
  font-weight: lighter;
  letter-spacing: -.1rem;
`;
