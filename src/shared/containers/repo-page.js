import {RepoPage} from '../components/repo-page';
import {provideHooks} from '../helpers';
import {loadRepoPage} from '../actions';

const hooks = {
  fetch: ({params, dispatch}) => dispatch(loadRepoPage(params.repo)),
};

export default provideHooks(hooks)(RepoPage);
