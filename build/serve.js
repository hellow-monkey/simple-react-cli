const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.dev");

const compiler = Webpack(webpackConfig);

const server = new WebpackDevServer(webpackConfig.devServer, compiler);

server.startCallback(() => {
  console.log("Press `CTRL-C` to stop");
});
