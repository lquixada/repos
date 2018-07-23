const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const DotenvPlugin = require('dotenv-webpack')

const dist = path.join(__dirname, 'dist')
const assets = path.join(dist, 'public')

module.exports = function (env) {
  return {
    mode: env.prod ? 'production' : 'development',

    entry: {
      app: env.prod ? ['./src/client'] : ['webpack-hot-middleware/client', './src/client']
    },

    devtool: env.prod ? 'source-map' : 'cheap-eval-source-map',

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                '@babel/react',
                ['@babel/env', {
                  targets: {
                    browsers: ['last 2 versions', 'not ie > 0']
                  },
                  modules: false
                }]
              ],
              plugins: env.prod
                ? ['@babel/plugin-syntax-dynamic-import', 'react-loadable/babel']
                : ['@babel/plugin-syntax-dynamic-import', 'react-loadable/babel', 'react-hot-loader/babel']
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
      maxEntrypointSize: 700000,
      maxAssetSize: 600000
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
      new webpack.NormalModuleReplacementPlugin(
        /\/server\/config\.js/,
        path.join(__dirname, 'src', 'client', 'config.js')
      ),
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
}
