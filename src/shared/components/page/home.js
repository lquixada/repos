import React from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'
import Loadable from 'react-loadable';

import {Content, Section, SectionContainer} from '../grid'
import {flex} from '../../helpers'

const AsyncIntro = Loadable({
  loader: () => import(/*webpackChunkName: 'chunk-home'*/ './async-home'),
  loading: () => <div>loading...</div>,
});

export const HomePage = () => (
  <Section>
    <Helmet>
      <title>Github Repos</title>
    </Helmet>

    <SectionContainer>
      <Content>
        <AsyncIntro />
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
