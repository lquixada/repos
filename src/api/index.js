import express from 'express'
import cors from 'cors'
import apollo from './apollo'

import logger from './logger'

const app = express()

app.use(cors())
app.use(logger)

apollo.applyMiddleware({ app })

export default app
