export default {
  endpoints: {
    repos: 'https://api.github.com/orgs/facebook/repos',
    repo: 'https://api.github.com/repos/facebook/%{repo}',
    contributors: 'https://api.github.com/repos/facebook/%{repo}/contributors?page=1&per_page=1'
  }
};
