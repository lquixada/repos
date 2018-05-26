import fetch from 'cross-fetch';

import {github} from '../config';

export default async (url) => {
  const separator = (url.indexOf('?')>-1? '&' : '?');
  const response = await fetch(`${url}${separator}access_token=${github.accessToken}`);
  const json = await response.json();

  return {response, json};
};
