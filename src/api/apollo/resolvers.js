import {getContributors, getContributorsCount, getRepos} from './helpers'

export default {
  Query: {
    repo: async (root, args, context) => {
      const owner = args.owner
      const {data} = await context.api.repos.get({owner, repo: args.name})
      return data
    },

    counts: async (root, args, context) => {
      const owner = args.owner
      const {data} = await getRepos(context.api, owner)
      const repos = data.map((repo) => repo.name)
      const counts = await Promise.all(repos.map(repo => getContributorsCount(context.api, owner, repo)))

      return repos.map((name, i) => ({name, count: counts[i]}))
    },

    contributors: async (repo, args, context) => {
      return getContributors(context, args.owner, args.repo, args.page)
    }
  },

  Repo: {
    contributors: async (repo, args, context) => {
      return getContributors(context, repo.owner.login, repo.name, args.page)
    }
  }
}
