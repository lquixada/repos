import fetch from 'cross-fetch';

import config from '../config';

export const fetchRepos = async () => {
  const url = config.endpoints.repos;
  const res = await fetch(url);
  return await res.json();
};
