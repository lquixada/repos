import {RepoPage} from '../components/repo-page';
import {provideHooks} from '../helpers';
import {loadRepoPage} from '../actions';

const hooks = {
  fetch: (params) => loadRepoPage(params.repo),
};

export default provideHooks(hooks)(RepoPage);
