export const getNextPage = (state, repoName) => state.contributors.getIn([repoName, 'nextPage'])
