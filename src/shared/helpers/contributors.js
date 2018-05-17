import fetch from 'cross-fetch';

import config from '../config';

export const totalContributorsDesc = (a, b) => b.contributors_count - a.contributors_count;

export const extractTotal = (header) => {
  const [, last] = header.split(',');
  const match = last.match(/page=(.*)&/);
  return parseInt(match[1], 10);
};

export const fetchContributors = async (repoName) => {
  const url = config.endpoints.contributors.replace('%{repo}', repoName);
  const res = await fetch(`${url}?page=1&per_page=1`);
  return [repoName, extractTotal(res.headers.get('Link'))];
};
