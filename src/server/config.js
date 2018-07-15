// Server-side config
import config from '../shared/config'

const graphql = process.env.NODE_ENV === 'production'
  ? 'https://853wnqn9nh.execute-api.us-east-1.amazonaws.com/prod/graphql'
  : 'http://localhost:3001/graphql'

export default Object.assign({ graphql }, config)
