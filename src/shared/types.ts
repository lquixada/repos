export type Count = [string, number, boolean]

export interface ICounts {
  data: Count[]
  isLoading: boolean
  nextPage: number,
}

export interface IContributor {
  login: string
  avatar_url: string
  html_url: string
}

export interface IContributors {
  data: IContributor[]
  isLoading: boolean
  nextPage: number,
}

export interface IRepo {
  name: string
  html_url: string
  stargazers_count: number
  subscribers_count: number
  forks_count: number
  open_issues_count: number
  license: object
  description: string
}
