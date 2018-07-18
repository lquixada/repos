import {App} from './components/app'
import {AboutPage} from './components/about-page'
import {NotFoundPage} from './components/not-found-page'
import HomePage from './containers/home-page'
import RepoPage from './containers/repo-page'

export default [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/r/:owner',
        exact: true,
        component: HomePage
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
