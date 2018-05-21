const pageHost = 'https://github.com';
const apiHost = 'https://api.github.com';

export const github = {
  // This token was created just for challenge purposes and has now admin privileges.
  // It will expire very soon.
  accessToken: '',
  hosts: {
    api: apiHost,
    web: pageHost,
  },
  endpoints: {
    contributors: `${apiHost}/repos/facebook/:repo/contributors`,
    repo: `${apiHost}/repos/facebook/:repo`,
    repos: `${apiHost}/orgs/facebook/repos`,
  }
};
