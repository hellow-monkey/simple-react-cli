const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");

const appDirectory = fs.realpathSync(process.cwd());
const isDev = process.env.NODE_ENV === "development";

const cssRules = [
  isDev ? "style-loader" : MiniCssExtractPlugin.loader,
  {
    loader: "css-loader",
    options: {
      sourceMap: true,
      importLoaders: 1,
    },
  },
  "postcss-loader",
];

module.exports = {
  entry: path.resolve(appDirectory, "src"),
  output: {
    path: path.resolve(appDirectory, "dist"),
    publicPath: "/",
    filename: "bundle.[contenthash].js",
    chunkFilename: "script/[chunkhash:8].[contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(scss|sass)$/,
        use: [...cssRules, "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [...cssRules],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2?)$/,
        type: "asset/resource",
      },
      {
        test: /\.(gif|png|jpe?g|svg|webp)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
      },
    ],
  },
  optimization: {
    moduleIds: "deterministic", // 默认 根据模块名称生成简短的hash值
    chunkIds: "deterministic",
    minimize: !isDev,
    minimizer: [
      new CssMinimizerPlugin({
        parallel: true, // 开启多线程压缩
      }),
      new TerserPlugin({
        parallel: true, // 开启多线程压缩
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: "all", // 默认作用于异步chunk
      minSize: 0, // 默认值是30kb,代码块的最小尺寸
      minChunks: 1, // 被多少模块共享,表示被引用次数，默认为1
      maxAsyncRequests: 2, // 限制异步模块内部的并行最大请求数的，默认为5
      maxInitialRequests: 4, // 限制入口的拆分数量 一个入口最大的并行请求数，默认为3
      automaticNameDelimiter: "~", // 默认webpack将会使用入口名和代码块的名称生成命名,比如 'vendors~main.js'
      cacheGroups: {
        vendors: {
          chunks: "all",
          test: /node_modules/,
          priority: -10, /// 优先级，
        },
        commons: {
          chunks: "all",
          minSize: 0, // 最小提取字节数
          minChunks: 2, // 最少被几个chunk引用
          priority: -20,
        },
      },
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "../public/index.html"),
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  resolve: {
    modules: [path.resolve(appDirectory, "node_modules")],
    extensions: [".js", ".jsx", "*"],
    mainFields: ["browser", "jsnext:main", "main"],
    alias: {
      "@": path.resolve(appDirectory, "src"),
      "~": path.resolve(appDirectory, "node_modules"),
    },
  },
};
