import {HomePage} from '../components/home-page'
import {provideHooks} from '../helpers'
import * as actions from '../actions'

const hooks = {
  fetch: ({dispatch}) => dispatch(actions.loadHomePage())
}

export default provideHooks(hooks)(HomePage)
