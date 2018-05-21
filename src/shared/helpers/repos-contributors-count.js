import fetch from './fetch';
import {github} from '../config';

export const extractTotal = (header) => {
  const str = header || '';
  const result = str
    .split(',')
    .find((fragment) => /rel="last"/.test(fragment));

  if (!result) {
    return 0;
  }

  const match = result.match(/[&?]page=(\d+)/);
  return match? parseInt(match[1], 10) : 0;
};

export const fetchContributorsCount = async (repoName) => {
  const url = github.endpoints.contributors.replace(':repo', repoName);
  const res = await fetch(`${url}?page=1&per_page=1`);
  return extractTotal(res.headers.get('Link'));
};

export const fetchRepos = async () => {
  const url = github.endpoints.repos;
  const res = await fetch(url);
  return await res.json();
};
