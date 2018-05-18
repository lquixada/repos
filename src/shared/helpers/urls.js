
export const githubUrl = (repo, resource) => `https://github.com/facebook/${repo.name}/${resource}`;

export const issuesUrl = (repo) => githubUrl(repo, 'issues');

export const forksUrl = (repo) => githubUrl(repo, 'network');

export const stargazersUrl = (repo) => githubUrl(repo, 'stargazers');

export const watchersUrl = (repo) => githubUrl(repo, 'watchers');
