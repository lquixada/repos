// Server-side config
const apiHost = process.env.NODE_ENV === 'production' ? 'https://853wnqn9nh.execute-api.us-east-1.amazonaws.com/prod' : 'http://localhost:3001'

export default {
  staticUrl: process.env.NODE_ENV === 'production' ? 'https://static.lquixada.com/repos' : '/assets',
  graphql: `${apiHost}/graphql`,
  github: 'https://github.com'
}
