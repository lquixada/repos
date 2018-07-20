import {App} from './components/app'
import {AboutPage} from './components/page/about'
import {NotFoundPage} from './components/page/not-found'
import {HomePage} from './components/page/home'
import OwnerPage from './containers/page/owner'
import RepoPage from './containers/page/repo'

export default [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomePage
      },
      {
        path: '/r/:owner',
        exact: true,
        component: OwnerPage
      },
      {
        path: '/r/:owner/:repo',
        component: RepoPage
      },
      {
        path: '/about',
        component: AboutPage
      },
      {
        path: '*',
        component: NotFoundPage
      }
    ]
  }
]
