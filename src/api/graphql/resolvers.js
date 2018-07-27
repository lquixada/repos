import {getContributors, getContributorsCount, getRepos} from './helpers'

const cache = new Map()

export default {
  Query: {
    repo: async (_, args, context) => {
      const {owner, name} = args
      const key = `repo.${owner}.${name}`
      const cached = cache.get(key)

      if (cached) {
        return cached
      }

      const {data} = await context.api.repos.get({owner, repo: name})
      cache.set(key, data)
      return data
    },

    counts: async (_, args, context) => {
      const {owner} = args
      const key = `counts.${owner}`
      const cached = cache.get(key)

      if (cached) {
        return cached
      }

      const {data} = await getRepos(context.api, owner)
      const repos = data.map((repo) => repo.name)
      const counts = await Promise.all(repos.map(repo => getContributorsCount(context.api, owner, repo)))

      const result = repos.map((name, i) => ({name, count: counts[i]}))
      cache.set(key, result)
      return result
    },

    contributors: async (_, args, context) => {
      return getContributors(context, args.owner, args.repo, args.page)
    }
  },

  Repo: {
    contributors: async (repo, args, context) => {
      return getContributors(context, repo.owner.login, repo.name, args.page)
    }
  }
}
