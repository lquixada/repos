import React from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'

import {Content, Section, SectionContainer} from '../grid'

export const ErrorPage: React.SFC = () => (
  <Section>
    <Helmet>
      <title>Error - Github Repos</title>
    </Helmet>

    <SectionContainer>
      <Content>
        <P>
          Whoops, looks like an error occurred.
        </P>
      </Content>
    </SectionContainer>
  </Section>
) as React.ReactElement<any>

const P = styled.p`
  margin-bottom: 1rem;
  font-size: 4rem;
  font-weight: lighter;
  letter-spacing: -.1rem;
`
