import {HomePage} from '../components/home-page';
import {provideHooks} from '../helpers';
import {loadHomePage} from '../actions';

const hooks = {
  fetch: () => loadHomePage(),
};

export default provideHooks(hooks)(HomePage);
