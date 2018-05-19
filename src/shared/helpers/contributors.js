import fetch from 'cross-fetch';

import config from '../config';

export const extractNext = (header) => {
  const [next] = header.split(',');
  const match = next.match(/<(.*?)>/);
  return match[1];
};

export const fetchContributors = async (repoName) => {
  const endpoint = config.endpoints.contributors;
  const url = `${endpoint.replace('%{repo}', repoName)}?page=1&per_page=40`;
  const res = await fetch(url);
  const linkHeader = res.headers.get('Link');
  const next = linkHeader && extractNext(linkHeader);
  const result = await res.json();

  return {
    next,
    result
  };
};

export const fetchMoreContributors = async (url) => {
  const res = await fetch(url);
  const linkHeader = res.headers.get('Link');
  const next = linkHeader && extractNext(linkHeader);
  const result = await res.json();

  return {
    next,
    result
  };
};
