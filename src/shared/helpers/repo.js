import fetch from './fetch';
import {github} from '../config';

export const fetchRepo = async (repoName) => {
  const url = github.endpoints.repo.replace(':repo', repoName);
  const res = await fetch(url);
  return await res.json();
};
