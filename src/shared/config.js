// Shared config
const staticUrl = process.env.NODE_ENV === 'production'
  ? 'https://static.lquixada.com/repos'
  : '/assets'

export default {
  staticUrl,
  github: 'https://github.com',
  appUrl: 'https://github.com/lquixada/repos'
}
