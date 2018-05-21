import {HomePage} from './components/home-page';
import {RepoPage} from './components/repo-page';
import {loadHomePage, loadRepoPage} from './actions';

export default [
  {
    path: '/',
    exact: true,
    initialLoad: () => loadHomePage(),
    component: HomePage
  },
  {
    path: '/r/:repo',
    initialLoad: (params) => loadRepoPage(params.repo),
    component: RepoPage
  }
];
