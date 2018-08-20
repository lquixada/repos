export const getNextPage = (state, owner, repoName) => state.contributors.getIn([owner, repoName, 'nextPage'])
