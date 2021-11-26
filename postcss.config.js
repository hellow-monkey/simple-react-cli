const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: {
    "postcss-preset-env": {},
    autoprefixer,
    "postcss-px-to-viewport": {
      unitToConvert: "px",
      viewportWidth: 750,
      unitPrecision: 5,
      propList: ["*"],
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: false,
      exclude: undefined,
      include: undefined,
      landscape: false,
      landscapeUnit: "vw",
      landscapeWidth: 568,
    },
  },
};
