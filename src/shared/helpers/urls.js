
export const githubUrl = (repoName, resource) => `https://github.com/facebook/${repoName}/${resource}`;

export const issuesUrl = (repoName) => githubUrl(repoName, 'issues');

export const forksUrl = (repoName) => githubUrl(repoName, 'network');

export const stargazersUrl = (repoName) => githubUrl(repoName, 'stargazers');

export const watchersUrl = (repoName) => githubUrl(repoName, 'watchers');
