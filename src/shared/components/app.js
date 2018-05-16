import React from 'react';

import {Title} from './title';
import Menu from '../containers/menu';
import {Main, Aside, Header, HeaderContainer, Section, SectionContainer} from './grid';

export const App = ({onSubmit}) => (
  <Main>
    <Header>
      <HeaderContainer>
        <Title />
        <button onClick={onSubmit}>
          Fetch repos
        </button>
      </HeaderContainer>
    </Header>

    <Section>
      <SectionContainer>
        <Aside>
          <Menu />
        </Aside>
      </SectionContainer>
    </Section>
  </Main>
);
