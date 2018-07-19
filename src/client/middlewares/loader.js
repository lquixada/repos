import NProgress from 'nprogress'
import {PAGE_REQUESTED, PAGE_SUCCEEDED, PAGE_FAILED} from '../../shared/actions'

NProgress.configure({ showSpinner: false })

export default store => next => action => {
  const { type } = action

  if (type === PAGE_REQUESTED) {
    NProgress.start()
  }

  if (type === PAGE_SUCCEEDED || type === PAGE_FAILED) {
    NProgress.done()
  }

  return next(action)
}
