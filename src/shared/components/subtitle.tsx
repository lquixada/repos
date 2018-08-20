import React from 'react'
import styled from 'styled-components'

interface IProps {
  children: string | undefined
}

export const Subtitle = ({children}: IProps) => (
  <Wrapper>{children}</Wrapper>
)

const Wrapper: any = styled.h2`
  color: #3c4146;
  font-family: 'Lato', Helvetica, sans-serif;
  font-size: 3rem;
  font-weight: normal;
  letter-spacing: -.1rem;
  line-height: 1.5;
  vertical-align: middle;
`
