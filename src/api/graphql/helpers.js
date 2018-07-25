import {extractTotal} from '../../shared/helpers'

export const getContributors = async (context, owner, repo, page) => {
  let nextPage = null
  const {data, headers} = await context.api.repos.getContributors({
    owner,
    repo,
    per_page: 40,
    page: page || 1
  })

  const regex = /<([^>]*)>;\s*rel="next"/
  const match = regex.exec(headers.link)

  if (match) {
    let url = match[1]
    nextPage = url.match(/[?&]page=(\d+)/)[1]
  }

  return {
    nextPage,
    data
  }
}

export const getContributorsCount = async (api, owner, repo) => {
  const {headers} = await api.repos.getContributors({
    owner,
    repo,
    per_page: 1,
    page: 1
  })

  return extractTotal(headers.link)
}

export const getRepos = async (api, owner) => {
  const {data} = await api.users.getForUser({ username: owner })

  if (data.type === 'User') {
    return api.repos.getForUser({
      username: owner
    })
  }

  return api.repos.getForOrg({
    org: owner,
    type: 'public'
  })
}
