const { merge } = require("webpack-merge");
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
      logging: "error",
      progress: true,
      overlay: true,
      reconnect: true,
    },
  },
  // plugins: [],
});

module.exports = webpackConfig;
