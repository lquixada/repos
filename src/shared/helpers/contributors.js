import fetch from './fetch';
import {github} from '../config';

export const extractNext = (header) => {
  const str = header || '';
  const result = str
    .split(',')
    .find((fragment) => /rel="next"/.test(fragment));

  if (!result) {
    return '';
  }

  const match = result.match(/<(.*)>/);
  return match? match[1] : '';
};

export const fetchContributors = async (repoName) => {
  const endpoint = github.endpoints.contributors;
  const url = `${endpoint.replace(':repo', repoName)}?per_page=40`;
  const res = await fetch(url);
  const next = extractNext(res.headers.get('Link'));
  const result = await res.json();

  return {
    next,
    result
  };
};

export const fetchMoreContributors = async (url) => {
  const res = await fetch(url);
  const next = extractNext(res.headers.get('Link'));
  const result = await res.json();

  return {
    next,
    result
  };
};
