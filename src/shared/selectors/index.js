export const getNextUrl = (state, repoName) => state.contributors.getIn([repoName, 'next'])
