const { merge } = require("webpack-merge");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const common = require("./webpack.common");

const webpackConfig = merge(common, {
  mode: "development",
  devtool: "cheap-module-source-map",
  module: {
    rules: [],
  },
  stats: "errors-only",
  devServer: {
    compress: true, // gzip 压缩
    allowedHosts: "all",
    open: false,
    hot: true,
    historyApiFallback: true,
    port: "auto",
    host: "0.0.0.0",
    client: {
      logging: "none",
      progress: true,
      overlay: true,
    },
  },
  plugins: [new FriendlyErrorsWebpackPlugin(), new ErrorOverlayPlugin()],
});

module.exports = webpackConfig;
