import React from 'react'
import styled from 'styled-components'

import {flex} from '../../helpers'

export default () => (
  <P>
    Choose a repository on the menu.
  </P>
)

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
