import {App} from './components/app'
import {AboutPage} from './components/page/about'
import {HomePage} from './components/page/home'
import {NotFoundPage} from './components/page/not-found'
import RepoPage from './containers/page/repo'

const routes: object[] = [
  {
    component: App,
    path: '/',
    routes: [
      {
        component: HomePage,
        exact: true,
        path: '/',
      },
      {
        component: RepoPage,
        path: '/r/:owner/:repo?',
      },
      {
        component: AboutPage,
        path: '/about',
      },
      {
        component: NotFoundPage,
        path: '*',
      },
    ],
  },
]

export default routes
