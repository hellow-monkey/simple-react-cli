const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "hidden-source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style/[name].[contenthash:8].css",
      chunkFilename: "style/[name].[contenthash:8].chunk.css",
      ignoreOrder: true,
    }),
    new ProgressBarPlugin(),
  ],
  stats: "normal",
});
