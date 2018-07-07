import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config from '../../../webpack.config'

const options = config({prod: false, client: true})
const compiler = webpack(options)

export default [
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: options.output.publicPath,
    stats: options.stats
  }),
  webpackHotMiddleware(compiler)
]
