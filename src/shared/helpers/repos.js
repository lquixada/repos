import fetch from 'cross-fetch';

import config from '../config';

export const fetchRepos = () => {
  const url = config.endpoints.repos;
  return fetch(url).then((res) => res.json());
};
