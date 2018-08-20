module.exports = {
  apps: [{
    name: 'web',
    interpreter: 'babel-node',
    interpreter_args: '--extensions ".js,.json,.ts,.tsx"',
    script: './src/server/dev.ts',
    watch: ['./src/server']
  }, {
    name: 'api',
    interpreter: 'babel-node',
    interpreter_args: '--extensions ".js,.json,.ts,.tsx" --require node_modules/dotenv/config',
    script: './src/api/dev.ts',
    watch: ['./src/api']
  }]
}
