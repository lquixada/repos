import {extractTotal} from '../../shared/helpers'

const cache = new Map()

export const getContributors = async (context, owner, repo, page) => {
  const key = `contributors.${owner}.${repo}.${page}`
  const cached = cache.get(key)

  if (cached) {
    return cached
  }

  let nextPage: any = null
  const {data, headers} = await context.api.repos.getContributors({
    owner,
    page: page || 1,
    per_page: 40,
    repo,
  })

  const regex = /<([^>]*)>;\s*rel="next"/
  const match = regex.exec(headers.link)

  if (match) {
    const url = match[1]
    const pageMatch = url.match(/[?&]page=(\d+)/)

    if (pageMatch) {
      nextPage = pageMatch[1]
    }
  }

  const result = {
    data,
    nextPage,
  }

  cache.set(key, result)

  return result
}

export const getContributorsCount = async (api, owner, repo) => {
  const {headers} = await api.repos.getContributors({
    owner,
    page: 1,
    per_page: 1,
    repo,
  })

  return extractTotal(headers.link)
}

export const getRepos = async (api, owner) => {
  const {data} = await api.users.getForUser({ username: owner })

  if (data.type === 'User') {
    return api.repos.getForUser({
      username: owner,
    })
  }

  return api.repos.getForOrg({
    org: owner,
    type: 'public',
  })
}
