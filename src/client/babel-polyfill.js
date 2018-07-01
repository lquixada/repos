// Issue and solution: https://github.com/babel/babel-loader/issues/401#issuecomment-365650944
if (!global._babelPolyfill) {
  require('babel-polyfill')
}
