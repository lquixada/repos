import React from 'react';
import styled from 'styled-components';

import Menu from '../containers/menu';
import {Footer} from './footer';
import {Title} from './title';
import {Main, Aside, Content, Header, HeaderContainer, Section, SectionContainer} from './grid';
import {flex} from '../helpers';

export const HomePage = () => (
  <Main>
    <Header>
      <HeaderContainer>
        <Title />
      </HeaderContainer>
    </Header>

    <Section>
      <SectionContainer>
        <Aside>
          <Menu />
          <Footer />
        </Aside>
        <Content>
          <Wrapper>
            Choose a repository on the menu.
          </Wrapper>
        </Content>
      </SectionContainer>
    </Section>
  </Main>
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
