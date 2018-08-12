import React from 'react'
import GitHubForkRibbon from 'react-github-fork-ribbon'
import styled from 'styled-components'

import config from '../config'
import {phones} from '../helpers'

export const Ribbon = () => (
  <ForkRibbon>
    Fork me on GitHub
  </ForkRibbon>
)

const ForkRibbon = styled(GitHubForkRibbon).attrs({
  position: 'right',
  color: 'orange',
  href: config.appUrl
})`
  @media (${phones}) {
    display: none;
  }
`
