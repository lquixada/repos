import React from 'react'
import {Helmet} from 'react-helmet'

import Repo from '../containers/repo'
import Menu from '../containers/menu'
import {Footer} from './footer'
import {Aside, Content, Section, SectionContainer} from './grid'

export const RepoPage = ({repoName}) => (
  <Section>
    <Helmet>
      <title>{repoName} - Github Repos</title>
    </Helmet>

    <SectionContainer>
      <Aside>
        <Menu />
        <Footer />
      </Aside>
      <Content>
        <Repo />
      </Content>
    </SectionContainer>
  </Section>
)
