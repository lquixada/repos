import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import {Repo} from '../../components/repo'
import * as actions from '../../actions'

export class RepoContainer extends React.Component {
  componentDidMount () {
    this.fetch()
  }

  componentDidUpdate (prevProps) {
    if (this.hasChanged(prevProps)) {
      this.fetch()
    }
  }

  fetch () {
    if (!this.hasLoaded()) {
      this.props.fetchRepo({
        owner: this.props.owner,
        repoName: this.props.repoName
      })
    }
  }

  hasLoaded () {
    const {repo} = this.props
    return repo && repo.get('data')
  }

  hasChanged (prevProps) {
    return (
      prevProps.owner !== this.props.owner ||
      prevProps.repoName !== this.props.repoName
    )
  }

  render () {
    if (!this.hasLoaded()) {
      return <div>Loading...</div>
    }

    return (
      <Repo owner={this.props.owner} repo={this.props.repo.get('data')} />
    )
  }
}

const mapStateToProps = ({repo}, {match}) => ({
  owner: match.params.owner,
  repoName: match.params.repo,
  repo: repo.getIn([match.params.owner, match.params.repo])
})
export default withRouter(connect(mapStateToProps, actions)(RepoContainer))
