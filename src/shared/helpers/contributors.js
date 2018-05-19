import fetch from 'cross-fetch';

import config from '../config';

export const fetchContributors = async (repoName) => {
  const endpoint = config.endpoints.contributors;
  const url = `${endpoint.replace('%{repo}', repoName)}?per_page=40`;
  const res = await fetch(url);
  return await res.json();
};
