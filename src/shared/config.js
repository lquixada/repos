const pageHost = 'https://github.com';
const apiHost = 'https://api.github.com';

export const github = {
  /**
   * Disclaimer: This token was created just for the challenge purposes and doesn't have
   * admin privileges. It will expire very soon. A better approach would be to place it
   * in a environment variable.
   */
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
