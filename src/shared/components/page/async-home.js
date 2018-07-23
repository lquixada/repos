import React from 'react'
import styled from 'styled-components'

import {flex} from '../../helpers'

export default () => (
  <P>
    Type a github user in the input above and hit Enter.
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
