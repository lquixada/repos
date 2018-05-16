import fetch from 'cross-fetch';

import config from '../config';

export const extractTotal = (header) => {
  const [, last] = header.split(',');
  const match = last.match(/page=(.*)&/);
  return parseInt(match[1], 10);
};

export const fetchContributors = (repo) => {
  const url = config.endpoints.contributors.replace('%{repo}', repo);
  return fetch(url).then((res) => extractTotal(res.headers.get('Link')));
};
