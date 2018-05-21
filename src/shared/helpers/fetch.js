import fetch from 'cross-fetch';

import {github} from '../config';

export default (url) => {
  const separator = (url.indexOf('?')>-1? '&' : '?');
  return fetch(`${url}${separator}access_token=${github.accessToken}`);
};
