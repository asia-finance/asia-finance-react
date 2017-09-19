module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'ignore'
      }
    ],
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
    'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false }
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    semi: ['error', 'never'],
    'react/forbid-prop-types': [1, { forbid: [] }],
    'arrow-parens': ['error', 'as-needed']
    // 'graphql/template-strings': [
    //   'error',
    //   {
    //     env: 'apollo',
    //     schemaJson: require('./graphqlSchema.json')
    //   }
    // ],
    // 'graphql/named-operations': [
    //   'warn',
    //   {
    //     schemaJson: require('./graphqlSchema.json')
    //   }
    // ]
  },
  // plugins: ['graphql'],
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  }
}
