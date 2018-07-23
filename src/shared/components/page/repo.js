import React from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'
import Loadable from 'react-loadable';

import Repo from '../../containers/repo'
import Menu from '../../containers/menu'
import {Footer} from '../footer'
import {Aside, Content, Section, SectionContainer} from '../grid'
import {flex} from '../../helpers'

const AsyncRepo = Loadable({
  loader: () => import(/*webpackChunkName: 'chunk-repo'*/ './async-repo'),
  loading: () => <div>loading...</div>,
});

export const RepoPage = ({repoName}) => (
  <Section>
    <Helmet>
      <title>{repoName ? `${repoName} -` : ''}Github Repos</title>
    </Helmet>

    <SectionContainer>
      <Aside>
        <Menu />
        <Footer />
      </Aside>
      <Content>
        {repoName
          ? <Repo />
          : (
            <AsyncRepo />
          )
        }
      </Content>
    </SectionContainer>
  </Section>
)

const P = styled.p`
  ${flex.display()}
  ${flex.middle()} 
  ${flex.center()}
  height: 50rem;
  border: .7rem dashed #eee;
  border-radius: .6rem;
  font-size: 1.4rem;
  letter-spacing: -.1px;
`
