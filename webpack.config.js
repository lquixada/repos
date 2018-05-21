const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webPath = path.join(__dirname, 'web', 'public');
const isProd = () => process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd()? 'production' : 'development',

  entry: {
    app: isProd()
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
          options: {
            babelrc: false,
            presets: ['react', ['es2015', {modules: false}]],
            plugins: ['react-hot-loader/babel']
          }
        }
      }
    ]
  },

  output: {
    path: webPath,
    publicPath: '/',
    filename: `scripts/[name]${isProd() ? '.[chunkhash]' : ''}.js`
  },

  performance: {
    maxEntrypointSize: 500000,
    maxAssetSize: 500000
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
    isProd()
      ? new CleanWebpackPlugin(path.join(webPath, 'scripts'))
      : new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'src/public/images',
        to: path.join(webPath, 'images')
      },
      {
        from: 'src/public/styles',
        to: path.join(webPath, 'styles')
      }
    ]),
    new AssetsPlugin({
      filename: 'assets.json',
      path: webPath,
      prettyPrint: true,
      update: true
    })
  ],

  stats: {
    modules: false,
  }
};
