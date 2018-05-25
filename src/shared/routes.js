import {App} from './components/app';
import {NotFoundPage} from './components/not-found-page';
import HomePage from './containers/home-page';
import RepoPage from './containers/repo-page';

export default [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomePage,
      },
      {
        path: '/r/:repo',
        component: RepoPage,
      },
      {
        path: '*',
        component: NotFoundPage,
      },
    ]
  }
];
