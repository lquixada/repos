import fetch from 'cross-fetch';

import config from '../config';

export const extractNext = (header) => {
  header = header || '';
  const match = header.match(/<(.*?)>; rel="next"/);
  return match? match[1] : '';
};

export const fetchContributors = async (repoName) => {
  const endpoint = config.endpoints.contributors;
  const url = `${endpoint.replace(':repo', repoName)}?page=1&per_page=40`;
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
