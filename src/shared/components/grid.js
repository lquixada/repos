import styled from 'styled-components'

import {flex, phones} from '../helpers'

export const Main = styled.main`
  ${flex.display()};
  ${flex.flow('column', 'nowrap')};
  height: 100%;
`

export const Aside = styled.aside`
  ${flex('0 0 20rem')}
  margin-right: 3rem;
  width: 20rem;
  vertical-align: top;

  @media (${phones}) {
    margin: 0;
    width: 100%;
    height: auto;
  }
`

export const Content = styled.article`
  ${flex('1')}
  width: 100%;
  color: #666;
`

export const Container = styled.div`
  ${flex.display()}
  ${flex.justify()}
  ${flex.left()}
  max-width: 78rem;
`

export const Header = styled.header`
  ${flex.display()}
  ${flex.left()}
  ${flex('none')}
  padding: 15px 20px;
  background-color: #3c4146;
`

export const HeaderContainer = Container.extend`
  ${flex.middle()}

  @media (${phones}) {
    ${flex.wrap('wrap')}
  }
`

export const Section = styled.section`
  ${flex.display()}
  ${flex.left()}
  ${flex('1 0 auto')}
  padding: 2rem;
`

export const SectionContainer = Container.extend`
  ${flex.top()}
  
  @media (${phones}) {
    ${flex.left()}
    ${flex.dir('column')}
    width: 78rem;
  }
`

export const P = styled.p`
  margin-bottom: 1rem;
  color: #393939;
  font-size: 1.4rem;
  line-height: 1.5;
`
