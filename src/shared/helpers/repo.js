import fetch from './fetch';
import {repoUrl} from './urls';

export const fetchRepo = async (repoName) => {
  const url = repoUrl(repoName);
  return await fetch(url);
};
