import http from 'serverless-http'
import app from './index'

exports.handler = http(app)
