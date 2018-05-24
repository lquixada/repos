import fetch from './fetch';
import {contributorsUrl} from './urls';

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
  const url = `${contributorsUrl(repoName)}?per_page=40`;
  const res = await fetch(url);
  const result = await res.json();
  const next = extractNext(res.headers.get('Link'));

  return {
    next,
    result
  };
};

export const fetchMoreContributors = async (url) => {
  const res = await fetch(url);
  const result = await res.json();
  const next = extractNext(res.headers.get('Link'));

  return {
    next,
    result
  };
};
