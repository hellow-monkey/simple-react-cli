module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'standard', // 包含所欲ES6+ 规范
    'plugin:react/recommended', // react jsx 规范支持
    'plugin:import/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './build/webpack.common.js'
      }
    },
    react: {
      version: 'detect'
    }
  }
}
