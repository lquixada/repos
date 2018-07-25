import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Content, Section, SectionContainer} from '../grid'

export const ErrorPage = () => (
  <Section>
    <SectionContainer>
      <Content>
        <P>
          Whoops, looks like an error occurred.
        </P>
      </Content>
    </SectionContainer>
  </Section>
)

ErrorPage.propTypes = {
  message: PropTypes.string
}

const P = styled.p`
  margin-bottom: 1rem;
  font-size: 4rem;
  font-weight: lighter;
  letter-spacing: -.1rem;
`
