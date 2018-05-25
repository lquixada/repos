import {App} from './components/app';
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
    ]
  }
];
