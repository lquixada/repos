import fetch from './fetch';
import {reposUrl, contributorsUrl} from './urls';

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
  const url = contributorsUrl(repoName);
  const {response} = await fetch(`${url}?page=1&per_page=1`);
  return extractTotal(response.headers.get('Link'));
};

export const fetchRepos = async () => {
  const url = reposUrl();
  const {json} = await fetch(url);
  return json;
};
