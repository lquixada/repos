import React from 'react'

import Contributors from '../../containers/repo/contributors'
import {IRepo} from '../../types'
import {Description} from './description'
import {Header} from './header'
import {Summary} from './summary'

interface IProps {
  owner: string
  repo: IRepo
}

export const Repo = ({owner, repo}: IProps) => (
  <div>
    <Header title={repo.name} url={repo.html_url} />
    <Description text={repo.description} />
    <Summary owner={owner} repo={repo} />
    <Contributors owner={owner} repoName={repo.name} />
  </div>
)
