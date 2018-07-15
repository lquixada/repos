import React from 'react'
import GitHubForkRibbon from 'react-github-fork-ribbon'
import config from '../config'

export const Ribbon = () => (
  <GitHubForkRibbon position='right'
    color='red'
    href={config.appUrl}
    target='_blank' >
      Fork me on GitHub
  </GitHubForkRibbon>
)
