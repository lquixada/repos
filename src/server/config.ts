// Server-side config
import config from '../shared/config'

const {SECURE, NODE_ENV, WEB_PORT = 3000} = process.env

export default Object.assign({}, config, {
  env: NODE_ENV,
  graphql: NODE_ENV === 'production'
    ? 'https://ltj5l1c74f.execute-api.us-east-1.amazonaws.com/prod/graphql'
    : 'http://localhost:3001/graphql',
  port: WEB_PORT,
  secure: SECURE,
})
