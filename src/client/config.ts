// Client-side config
import config from '../shared/config'

const graphql = process.env.NODE_ENV === 'production'
  ? 'https://repos-api.lquixada.com/graphql'
  : 'http://localhost:3001/graphql'

export default Object.assign({ graphql }, config)
