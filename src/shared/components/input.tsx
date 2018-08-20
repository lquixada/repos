import styled from 'styled-components'

export const Input = styled.input.attrs({
  'aria-label': 'Repository input',
  'autoFocus': true,
  'type': 'text',
})`
  background-color: #33373c;
  border: 1px solid;
  border-radius: 5px;
  border-color: #303030 #505050 #505050 #303030;
  width: 300px;
  padding: 0 10px 5px;
  color: #b9b9b9;
  font-family: 'Lato', Helvetica, sans-serif;
  font-size: 30px;
  letter-spacing: -1px;
  border-radius: 4px;
  outline: none;

  @media (max-width: 576px) {
    margin: 10px 0 0;
    width: 100%;
  }
`
