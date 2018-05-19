import fetch from 'cross-fetch';

import config from '../config';

export const fetchRepo = async (repoName) => {
  const url = config.endpoints.repo.replace('%{repo}', repoName);
  const res = await fetch(url);
  return await res.json();
};
