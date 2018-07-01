import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const Title = () => (
  <Wrapper>
    <NavLink to='/'>
      <Image src='/assets/images/logo.jpg' />
    </NavLink>
  </Wrapper>
)

const Wrapper = styled.h1`
  line-height: 1;
`

const NavLink = styled(Link)`
  display: inline-block;
  height: 4.5rem;
  font-size: 1rem;
  text-decoration: none;
`

const Image = styled.img`
  display: inline-block;
  height: 100%;
`
