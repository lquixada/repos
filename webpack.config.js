const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const DotenvPlugin = require('dotenv-webpack')
const babelConfig = require('./.babelrc')

const babelOptions = Object.assign({babelrc: false}, babelConfig.env.client)
const webPath = path.join(__dirname, 'web', 'public')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProd ? 'production' : 'development',

  entry: {
    app: isProd
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
    publicPath: isProd ? 'https://static.lquixada.com/repos/' : '/assets/',
    filename: `scripts/[name]${isProd ? '.[chunkhash]' : ''}.js`
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
    isProd
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
