import NProgress from 'nprogress'
import {PAGE_FAILED, PAGE_REQUESTED, PAGE_SUCCEEDED} from '../../shared/actions'

NProgress.configure({ showSpinner: false })

export default () => (next) => (action) => {
  const { type } = action

  if (type === PAGE_REQUESTED) {
    NProgress.start()
  }

  if (type === PAGE_SUCCEEDED || type === PAGE_FAILED) {
    NProgress.done()
  }

  return next(action)
}
