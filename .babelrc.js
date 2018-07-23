module.exports = {
  presets: [
    '@babel/react',
    ['@babel/env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    'dynamic-import-node-babel-7'
  ]
}
