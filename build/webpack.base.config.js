const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../lib/index.js'),
  output: {
    library: 'vue-handy-utils',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
