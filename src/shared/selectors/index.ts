import get from 'lodash.get'

export const getNextPage = (state, owner, repoName) => get(state.contributors, `${owner}.${repoName}.nextPage`)
