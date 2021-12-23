module.exports = {
  presets: [
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
    "@babel/preset-env",
    "@babel/preset-typescript",
  ],
  plugins: ["@babel/plugin-syntax-dynamic-import", "@babel/plugin-transform-runtime", "@babel/plugin-proposal-class-properties"],
};
