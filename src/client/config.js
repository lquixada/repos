// Client-side config
const apiHost = process.env.NODE_ENV === 'production' ? 'https://repos.lquixada.com' : 'http://localhost:3001'

export default {
  staticUrl: process.env.NODE_ENV === 'production' ? 'https://static.lquixada.com/repos' : '/assets',
  graphql: `${apiHost}/graphql`,
  github: 'https://github.com'
}
