import express from 'express'
import cors from 'cors'

import logger from './logger'
import apollo from './apollo'

const app = express()

app.use(cors())
app.use(logger)

apollo.applyMiddleware({ app })

export default app
