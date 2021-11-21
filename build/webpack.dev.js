const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const { merge } = require('webpack-merge')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const common = require('./webpack.common')

const webpackConfig = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  module: {
    rules: []
  },
  stats: 'errors-only',
  devServer: {
    compress: true, // gzip 压缩
    allowedHosts: 'all',
    open: false,
    hot: true,
    historyApiFallback: true,
    port: 'auto',
    host: '0.0.0.0',
    client: {
      logging: 'none',
      progress: true,
      overlay: true
    }
  },
  plugins: [new FriendlyErrorsWebpackPlugin()]
})

const compiler = Webpack(webpackConfig)

const server = new WebpackDevServer(webpackConfig.devServer, compiler)

server.startCallback(() => {
  console.log('Press `CTRL-C` to stop')
})

module.exports = webpackConfig
