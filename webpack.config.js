const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const DotenvPlugin = require('dotenv-webpack')
const babelConfig = require('./.babelrc')

const babelOptions = Object.assign({babelrc: false}, babelConfig.env.client)
const webPath = path.join(__dirname, 'web', 'public')

module.exports = function (env) {
  const client = {
    mode: env.prod ? 'production' : 'development',

    entry: {
      app: env.prod
        ? ['./src/client']
        : ['webpack-hot-middleware/client', './src/client']
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: babelOptions
          }
        }
      ]
    },

    output: {
      path: webPath,
      publicPath: env.prod ? 'https://static.lquixada.com/repos/' : '/assets/',
      filename: `scripts/[name]${env.prod ? '.[chunkhash]' : ''}.js`
    },

    performance: {
      maxEntrypointSize: 550000,
      maxAssetSize: 550000
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all'
          }
        }
      }
    },

    plugins: [
      env.prod
        ? new CleanWebpackPlugin(path.join(webPath, 'scripts'))
        : new webpack.HotModuleReplacementPlugin(),
      new DotenvPlugin({systemvars: true}),
      new CopyWebpackPlugin([
        {
          from: 'src/public/images',
          to: path.join(webPath, 'images')
        }
      ]),
      new AssetsPlugin({
        filename: 'assets.json',
        path: webPath,
        fullPath: false,
        prettyPrint: true,
        update: true
      })
    ],

    stats: {
      modules: false
    }
  }

  const server = {
    mode: 'production',

    target: 'node',

    entry: path.join(__dirname, 'web', 'app.js'),

    externals: [
      'webpack',
      'webpack-dev-middleware',
      'webpack-hot-middleware'
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },

    output: {
      path: path.join(__dirname, 'web'),
      filename: 'node.js'
    },

    plugins: [
      new webpack.IgnorePlugin(/webpack.config/),
      new DotenvPlugin({systemvars: true})
    ],

    stats: {
      modules: false
    }
  }

  return env.client ? client : server
}
