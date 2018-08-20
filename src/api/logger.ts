import middleware from 'morgan'
import winston from 'winston'

const {combine, colorize, simple} = winston.format
const isProd = process.env.NODE_ENV === 'production'
const format = isProd ? simple() : combine(colorize(), simple())

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

export default middleware('combined', {
  stream: {
    write: (message, encoding) => logger.info(message),
  },
})
