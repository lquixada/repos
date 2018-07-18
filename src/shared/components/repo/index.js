import React from 'react'

import Contributors from '../../containers/repo/contributors'
import {Description} from './description'
import {Header} from './header'
import {Summary} from './summary'

export const Repo = ({owner, repo}) => (
  <div>
    <Header title={repo.get('name')} url={repo.get('html_url')} />
    <Description text={repo.get('description')} />
    <Summary owner={owner} repo={repo} />
    <Contributors owner={owner} repoName={repo.get('name')} />
  </div>
)
