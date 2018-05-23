import fetch from './fetch';
import {repoUrl} from './urls';

export const fetchRepo = async (repoName) => {
  const url = repoUrl(repoName);
  const res = await fetch(url);
  return await res.json();
};
