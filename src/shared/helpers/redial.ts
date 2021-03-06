/* A simpler implementation of Redial (https://github.com/markdalgleish/redial) */
import {END} from 'redux-saga'

export const provideHooks = (hooks) => (ComposedComponent) => Object.assign(ComposedComponent, {hooks})

export const trigger = (hookName, matchs, dispatch): void => {
  matchs.forEach(({match, route}) => {
    const {hooks} = route.component
    const {params} = match

    if (hooks && hooks[hookName]) {
      const hook = hooks[hookName]

      hook({params, dispatch})
    }
  })
  dispatch(END)
}
