import winston from 'winston'

import config from './config'

const {combine, colorize, simple} = winston.format
const format = config.env === 'production' ? simple() : combine(colorize(), simple())

const logger = winston.createLogger({
  exitOnError: false,
  transports: [
    new winston.transports.Console({
      format,
      level: 'debug',
      silent: false,
    }),
  ],
})

export default logger
