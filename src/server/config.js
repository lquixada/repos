// Server-side config
import config from '../shared/config'

const {SECURE, NODE_ENV, WEB_PORT = 3000} = process.env

export default Object.assign({}, config, {
  port: WEB_PORT,
  secure: SECURE,
  env: NODE_ENV,
  graphql: NODE_ENV === 'production'
    ? 'https://853wnqn9nh.execute-api.us-east-1.amazonaws.com/prod/graphql'
    : 'http://localhost:3001/graphql'
})
