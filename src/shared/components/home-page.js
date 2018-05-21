import React from 'react';

import Menu from '../containers/menu';
import {Footer} from './footer';
import {Empty} from './empty';
import {Title} from './title';
import {Main, Aside, Content, Header, HeaderContainer, Section, SectionContainer} from './grid';

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
          <Empty />
        </Content>
      </SectionContainer>
    </Section>
  </Main>
);
