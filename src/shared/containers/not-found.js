import {NotFoundPage} from '../components/not-found-page';
import {provideHooks} from '../helpers';
import {loadHomePage} from '../actions';

const hooks = {
  fetch: ({dispatch}) => dispatch(loadHomePage()),
};

export default provideHooks(hooks)(NotFoundPage);
