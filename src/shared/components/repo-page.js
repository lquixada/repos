import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'

import Repo from '../containers/repo'
import Menu from '../containers/menu'
import {Footer} from './footer'
import {Title} from './title'
import {Main, Aside, Content, Header, HeaderContainer, Section, SectionContainer} from './grid'

export const RepoPage = ({match}) => (
  <Main>
    <Helmet>
      <title>{match.params.repo} - Facebook Repos</title>
    </Helmet>

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
          <Repo name={match.params.repo} />
        </Content>
      </SectionContainer>
    </Section>
  </Main>
)

RepoPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repo: PropTypes.string
    })
  })
}
