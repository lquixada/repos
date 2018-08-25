import React from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'

import Menu from '../../containers/menu'
import Repo from '../../containers/repo'
import {flex} from '../../helpers'
import {Footer} from '../footer'
import {Aside, Content, Section, SectionContainer} from '../grid'

interface IProps {
  repoName: string | undefined
}

export const RepoPage: React.SFC<IProps> = ({repoName}) => (
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
            <P>
              Choose a repository on the menu.
            </P>
          )
        }
      </Content>
    </SectionContainer>
  </Section>
) as React.ReactElement<any>

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
