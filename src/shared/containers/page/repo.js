import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {RepoPage} from '../../components/page/repo'
import {provideHooks} from '../../helpers'
import * as actions from '../../actions'

const hooks = {
  fetch: ({params, dispatch}) => dispatch(actions.fetchPage({
    name: 'repo',
    owner: params.owner,
    repoName: params.repo
  }))
}

export class RepoPageContainer extends React.Component {
  componentDidMount () {
    if (!this.hasLoaded()) {
      this.fetch(this.props)
    }
  }

  componentDidUpdate (prevProps) {
    if (this.hasChanged(prevProps)) {
      this.fetch(this.props)
    }
  }

  fetch ({owner, repoName}) {
    this.props.fetchPage({
      name: 'repo',
      owner,
      repoName
    })
  }

  hasChanged (prevProps) {
    return (
      prevProps.owner !== this.props.owner
    )
  }

  hasLoaded () {
    const counts = this.props.counts.get(this.props.owner)
    return counts && counts.get('data') && !counts.get('data').isEmpty()
  }

  render () {
    return (
      <RepoPage repoName={this.props.repoName} />
    )
  }
}

const mapStateToProps = ({counts}, {match}) => ({
  counts,
  owner: match.params.owner,
  repoName: match.params.repo
})
const composed = compose(provideHooks(hooks), connect(mapStateToProps, actions))
export default composed(RepoPageContainer)
