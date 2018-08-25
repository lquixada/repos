import React from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'

import {Content, Section, SectionContainer} from '../grid'

export const NotFoundPage: React.SFC = () => (
  <Section>
    <Helmet>
      <title>Not Found - Github Repos</title>
    </Helmet>

    <SectionContainer>
      <Content>
        <P>
          Whoops, looks like that page doesn't exist.
        </P>
      </Content>
    </SectionContainer>
  </Section>
) as React.ReactElement<any>

const P = styled.p`
  font-size: 4rem;
  font-weight: lighter;
  letter-spacing: -.1rem;
`
