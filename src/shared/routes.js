import HomePage from './containers/home-page';
import RepoPage from './containers/repo-page';

export default [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/r/:repo',
    component: RepoPage
  }
];
