import get from 'lodash.get'

import {IContributors} from '../types'

type Repo = Map<string, IContributors>
type Owner = Map<string, Repo>

interface IState {
  contributors: Owner
}

export const getNextPage = (state: IState, owner: string, repoName: string) =>
  get(state.contributors, `${owner}.${repoName}.nextPage`)
