import 'cross-fetch/polyfill'
import express from 'express'
import cors from 'cors'
import {ApolloServer} from 'apollo-server-express'

import logger from './logger'
import config from './config'

const apollo = new ApolloServer(config)
const app = express()

app.use(cors())
app.use(logger)

apollo.applyMiddleware({ app })

export default app
