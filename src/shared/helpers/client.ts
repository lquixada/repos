import ApolloClient from 'apollo-boost'
import config from '../../server/config'

const client = new ApolloClient({
  uri: config.graphql,
})

export const getClient = () => client
