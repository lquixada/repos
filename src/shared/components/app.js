import React from 'react';
import {Route} from 'react-router';

import {Title} from './title';
import Repo from '../containers/repo';
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
        <Route path="/:repo" component={Repo}/>
      </SectionContainer>
    </Section>
  </Main>
);
