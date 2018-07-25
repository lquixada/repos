import express from 'express'

import logger from './logger'
import apollo from './apollo'

const app = express()

app.use(logger)

apollo.applyMiddleware({ app })

export default app
