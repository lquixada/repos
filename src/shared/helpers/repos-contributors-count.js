import fetch from 'cross-fetch';

import config from '../config';

export const extractTotal = (header) => {
  header = header || '';
  const match = header.match(/<.*?[&?]page=(.*?)&?>; rel="last"/);
  return match? parseInt(match[1], 10) : 0;
};

export const fetchContributorsCount = async (repoName) => {
  const url = config.endpoints.contributors.replace(':repo', repoName);
  const res = await fetch(`${url}?page=1&per_page=1`);
  return extractTotal(res.headers.get('Link'));
};

export const fetchRepos = async () => {
  const url = config.endpoints.repos;
  const res = await fetch(url);
  return await res.json();
};