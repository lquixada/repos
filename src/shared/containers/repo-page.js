import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {RepoPage} from '../components/repo-page'
import {provideHooks} from '../helpers'
import * as actions from '../actions'

const hooks = {
  fetch: ({params, dispatch}) => dispatch(actions.fetchPage({
    name: 'repo',
    owner: params.owner || 'facebook',
    repoName: params.repo
  }))
}

export class RepoPageContainer extends React.Component {
  componentDidUpdate (prevProps) {
    if (this.hasChanged(prevProps)) {
      this.fetch(this.props)
    }
  }

  fetch ({owner, repo}) {
    this.props.fetchPage({
      name: 'repo',
      owner: owner || 'facebook',
      repoName: repo
    })
  }

  hasChanged (prevProps) {
    return (
      prevProps.owner !== this.props.owner ||
      prevProps.repoName !== this.props.repoName
    )
  }

  render () {
    return (
      <RepoPage repoName={this.props.repoName} />
    )
  }
}

const mapStateToProps = (state, {match}) => ({
  owner: match.params.owner,
  repoName: match.params.repo
})
const composed = compose(provideHooks(hooks), connect(mapStateToProps, actions))
export default composed(RepoPageContainer)
