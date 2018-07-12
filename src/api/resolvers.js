import {extractTotal} from '../shared/helpers'

const getContributors = async (api, repo) => {
  const {headers} = await api.getContributors({
    owner: 'facebook',
    repo,
    per_page: 1,
    page: 1
  })

  return extractTotal(headers.link)
}

export default {
  Query: {
    repo: async (root, args, context) => {
      const {data} = await context.api.get({owner: 'facebook', repo: args.name})
      return data
    },

    repoCount: async (root, args, context) => {
      const {data} = await context.api.getForOrg({
        org: 'facebook',
        type: 'public'
      })
      const repos = data.map((repo) => repo.name)
      const counts = await Promise.all(repos.map(repo => getContributors(context.api, repo)))

      return repos.map((name, i) => ({name, count: counts[i]}))
    },

    contributors: async (root, args, context) => {
      let nextPage = null
      const {data, headers} = await context.api.getContributors({
        owner: 'facebook',
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
