const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const DotenvPlugin = require('dotenv-webpack')

const web = path.join(__dirname, 'web')
const assets = path.join(web, 'public')

module.exports = function (env) {
  const client = {
    mode: env.prod ? 'production' : 'development',

    entry: {
      app: env.prod ? ['./src/client'] : ['webpack-hot-middleware/client', './src/client']
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/env', {
                  targets: {
                    browsers: ['last 2 versions', 'not ie > 0']
                  },
                  modules: false
                }]
              ],
              plugins: env.prod ? [] : ['react-hot-loader/babel']
            }
          }
        }
      ]
    },

    output: {
      path: assets,
      publicPath: env.prod ? 'https://static.lquixada.com/repos/' : '/assets/',
      filename: env.prod ? 'scripts/[name].[chunkhash:6].js' : 'scripts/[name].js'
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
        ? new CleanWebpackPlugin(path.join(assets, 'scripts'))
        : new webpack.HotModuleReplacementPlugin(),
      new DotenvPlugin({systemvars: true}),
      new CopyWebpackPlugin([
        {
          from: 'src/public/images',
          to: path.join(assets, 'images')
        }
      ]),
      new AssetsPlugin({
        filename: 'assets.json',
        path: assets,
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

    entry: path.join(web, 'app.js'),

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
      path: web,
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
