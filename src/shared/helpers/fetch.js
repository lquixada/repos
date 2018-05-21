import fetch from 'cross-fetch';

import config from '../config';

export default (url) => {
  const separator = (url.indexOf('?')>-1?'&':'?');
  return fetch(`${url}${separator}access_token=${config.accessToken}`);
};
