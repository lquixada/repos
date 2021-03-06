import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

export const Footer: React.SFC = () => (
  <Wrapper>
    <OutLink href='http://linkedin.com/in/lquixada'>LinkedIn</OutLink>
    {' '}|{' '}
    <OutLink href='https://github.com/lquixada/'>Github</OutLink>
    {' '}|{' '}
    <InLink to='/about'>About me</InLink>
    <br />
    Made with ❤ by Leonardo Quixadá.
  </Wrapper>
) as React.ReactElement<any>

const Wrapper = styled.footer`
  margin: 1rem 0;
  padding: 0 1rem;
  color: #767676;
  font-size: 1rem;
  line-height: 1.5;
`

const InLink = styled(NavLink)`
  margin-bottom: 1rem;
  color: #767676;
  font-size: 1rem;
  text-decoration: none;
`

const OutLink = styled.a`
  margin-bottom: 1rem;
  color: #767676;
  font-size: 1rem;
  text-decoration: none;
`
