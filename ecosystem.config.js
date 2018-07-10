module.exports = {
  apps: [{
    name: 'isomorphic',
    interpreter: 'babel-node',
    script: './src/local-app.js',
    watch: true,
    env: {
      NODE_ENV: 'development'
    }
  }, {
    name: 'api',
    interpreter: 'babel-node',
    interpreter_args: '--require node_modules/dotenv/config',
    script: './src/local-api.js',
    watch: true
  }]
}
