import fetch from 'cross-fetch';

import {repoUrl, contributorsUrl, reposUrl} from './urls';
import {extractNext, extractTotal} from './strings';
import {github} from '../config';

export const fetchJson = async (url) => {
  const separator = (url.indexOf('?')>-1? '&' : '?');
  const response = await fetch(`${url}${separator}access_token=${github.accessToken}`);
  const json = await response.json();

  return {response, json};
};

export const fetchContributors = async (repoName) => {
  const url = `${contributorsUrl(repoName)}?per_page=40`;
  const {response, json} = await fetchJson(url);

  return {
    next: extractNext(response.headers.get('Link')),
    result: json,
  };
};

export const fetchContributorsCount = async (repoName) => {
  const url = contributorsUrl(repoName);
  const {response} = await fetchJson(`${url}?page=1&per_page=1`);

  return extractTotal(response.headers.get('Link'));
};

export const fetchMoreContributors = async (url) => {
  const {response, json} = await fetchJson(url);

  return {
    next: extractNext(response.headers.get('Link')),
    result: json,
  };
};

export const fetchRepo = async (repoName) => {
  const url = repoUrl(repoName);
  return await fetchJson(url);
};

export const fetchRepos = async () => {
  const url = reposUrl();
  const {json} = await fetchJson(url);
  return json;
};
