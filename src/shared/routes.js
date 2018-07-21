import {App} from './components/app'
import {AboutPage} from './components/page/about'
import {NotFoundPage} from './components/page/not-found'
import {HomePage} from './components/page/home'
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
        path: '/r/:owner/:repo?',
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
