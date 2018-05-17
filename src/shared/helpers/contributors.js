import fetch from 'cross-fetch';

export const totalContributorsDesc = (a, b) => b.contributors_count - a.contributors_count;

export const extractTotal = (header) => {
  const [, last] = header.split(',');
  const match = last.match(/page=(.*)&/);
  return parseInt(match[1], 10);
};

export const fetchContributors = async (url) => {
  url = `${url}?page=1&per_page=1`;
  const res = await fetch(url);
  return extractTotal(res.headers.get('Link'));
};
