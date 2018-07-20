import React from 'react'
import styled from 'styled-components'

import Menu from '../../containers/menu'
import {Footer} from '../footer'
import {Aside, Content, Section, SectionContainer} from '../grid'
import {flex} from '../../helpers'

export const OwnerPage = () => (
  <Section>
    <SectionContainer>
      <Aside>
        <Menu />
        <Footer />
      </Aside>
      <Content>
        <Wrapper>
          Choose a repository on the menu.
        </Wrapper>
      </Content>
    </SectionContainer>
  </Section>
)

const Wrapper = styled.div`
  ${flex.display()}
  ${flex.middle()} 
  ${flex.center()}
  height: 50rem;
  border: .7rem dashed #eee;
  border-radius: .6rem;
  font-size: 1.4rem;
  letter-spacing: -.1px;
`
