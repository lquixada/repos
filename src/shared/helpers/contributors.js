import fetch from 'cross-fetch';

export const totalContributorsDesc = (a, b) => {
  if (a.totalContributors > b.totalContributors) {
    return -1;
  }
  if (a.totalContributors < b.totalContributors) {
    return 1;
  }
  return 0;
};

export const extractTotal = (header) => {
  const [, last] = header.split(',');
  const match = last.match(/page=(.*)&/);
  return parseInt(match[1], 10);
};

export const fetchContributors = (url) => {
  url = `${url}?page=1&per_page=1`;
  return fetch(url).then((res) => extractTotal(res.headers.get('Link')));
};
