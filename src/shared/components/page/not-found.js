import React from 'react'
import styled from 'styled-components'

import {Content, Section, SectionContainer} from '../grid'

export const NotFoundPage = () => (
  <Section>
    <SectionContainer>
      <Content>
        <P>Whoops, looks like that page doesn't exist.</P>
      </Content>
    </SectionContainer>
  </Section>
)

const P = styled.p`
  font-size: 4rem;
  font-weight: lighter;
  letter-spacing: -.1rem;
`
