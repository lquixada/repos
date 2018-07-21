import React from 'react'
import styled from 'styled-components'

export const Input = (props) => (
  <TextInput type='text' {...props} />
)

const TextInput = styled.input`
  background-color: #33373c;
  border: .1rem solid;
  border-radius: .5rem;
  border-color: #303030 #505050 #505050 #303030;
  width: 30rem;
  padding: 0rem 1rem .5rem;
  color: #b9b9b9;
  font-family: 'Lato', Helvetica, sans-serif;
  font-size: 3rem;
  letter-spacing: -.1rem;
  border-radius: .4rem;
  outline: none;

  @media (max-width: 576px) {
    margin: 1rem 0 0;
    width: 100%;
  }
`
