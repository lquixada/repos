import get from 'lodash.get'
import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import * as actions from '../../actions'
import {Repo} from '../../components/repo'

interface IProps {
  owner: string
  repo: any
  repoName: string
  fetchRepo(payload: object): void
}

export class RepoContainer extends React.Component<IProps, any> {
  public componentDidMount() {
    this.fetch()
  }

  public componentDidUpdate(prevProps) {
    if (this.hasChanged(prevProps)) {
      this.fetch()
    }
  }

  public fetch() {
    if (!this.hasLoaded()) {
      this.props.fetchRepo({
        owner: this.props.owner,
        repoName: this.props.repoName,
      })
    }
  }

  public getRepo() {
    const {repo} = this.props
    return repo && repo.data
  }

  public hasLoaded() {
    return !!this.getRepo()
  }

  public hasChanged(prevProps) {
    return (
      prevProps.owner !== this.props.owner ||
      prevProps.repoName !== this.props.repoName
    )
  }

  public render() {
    if (!this.hasLoaded()) {
      return <div>Loading...</div>
    }

    return (
      <Repo owner={this.props.owner} repo={this.getRepo()} />
    )
  }
}

const mapStateToProps = ({repo}, {match}) => ({
  owner: match.params.owner,
  repo: get(repo, `${match.params.owner}.${match.params.repo}`),
  repoName: match.params.repo,
})
export default withRouter(connect(mapStateToProps, actions)(RepoContainer))
