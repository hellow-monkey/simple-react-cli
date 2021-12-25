module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "standard", // 包含所欲ES6+ 规范
    "plugin:react/recommended", // react jsx 规范支持
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "no-useless-escape": 0,
    "no-prototype-builtins": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "react/jsx-uses-react": 0,
    "no-use-before-define": 0,
    "import/no-unresolved": 0,
    "@typescript-eslint/no-var-requires": 0,
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "./build/webpack.common.js",
      },
    },
    react: {
      version: "detect",
    },
  },
  globals: {
    JSX: true,
    NodeJS: true,
    React: true,
  },
};
