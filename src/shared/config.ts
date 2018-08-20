// Shared config
const staticUrl = process.env.NODE_ENV === 'production'
  ? 'https://static.lquixada.com/repos'
  : '/assets'

export default {
  appUrl: 'https://github.com/lquixada/repos',
  dns: [
    'https://repos-api.lquixada.com',
    'https://static.lquixada.com',
    'https://avatars0.githubusercontent.com',
    'https://avatars1.githubusercontent.com',
    'https://avatars2.githubusercontent.com',
    'https://avatars3.githubusercontent.com',
  ],
  github: 'https://github.com',
  staticUrl,
}
