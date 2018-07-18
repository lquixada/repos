import {extractTotal} from '../shared/helpers'

const getContributors = async (api, owner, repo) => {
  const {headers} = await api.repos.getContributors({
    owner,
    repo,
    per_page: 1,
    page: 1
  })

  return extractTotal(headers.link)
}

const getRepos = async (api, owner) => {
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

export default {
  Query: {
    repo: async (root, args, context) => {
      const owner = args.owner || 'facebook'
      const {data} = await context.api.repos.get({owner, repo: args.name})
      return data
    },

    repoCount: async (root, args, context) => {
      const owner = args.owner || 'facebook'
      const {data} = await getRepos(context.api, owner)
      const repos = data.map((repo) => repo.name)
      const counts = await Promise.all(repos.map(repo => getContributors(context.api, owner, repo)))

      return repos.map((name, i) => ({name, count: counts[i]}))
    },

    contributors: async (root, args, context) => {
      let nextPage = null
      const owner = args.owner || 'facebook'
      const {data, headers} = await context.api.repos.getContributors({
        owner,
        repo: args.repo,
        per_page: 40,
        page: args.page || 1
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
  }
}
