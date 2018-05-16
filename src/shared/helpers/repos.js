import fetch from 'cross-fetch';

export const fetchRepos = (url) => {
  return fetch(url).then((res) => res.json());
};
