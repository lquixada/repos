import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import * as actions from '../../actions'
import {RepoPage} from '../../components/page/repo'
import {provideHooks} from '../../helpers'

const hooks = {
  fetch: ({params, dispatch}) => dispatch(actions.fetchPage({
    name: 'repo',
    owner: params.owner,
    repoName: params.repo,
  })),
}

interface IProps {
  counts: object
  owner: string
  repoName: string | undefined
  fetchPage(payload: object): void
}

export class RepoPageContainer extends React.Component<IProps, any> {
  public componentDidMount() {
    if (!this.hasLoaded()) {
      this.fetch()
    }
  }

  public componentDidUpdate(prevProps) {
    if (this.hasChanged(prevProps) && !this.hasLoaded()) {
      this.fetch()
    }
  }

  public render() {
    return (
      <RepoPage repoName={this.props.repoName} />
    )
  }

  private fetch() {
    const {owner, repoName} = this.props

    this.props.fetchPage({
      name: 'repo',
      owner,
      repoName,
    })
  }

  private hasChanged(prevProps) {
    return (
      prevProps.owner !== this.props.owner
    )
  }

  private hasLoaded() {
    const counts = this.props.counts[this.props.owner]
    return counts && counts.data && counts.data.length !== 0
  }
}

const mapStateToProps = ({counts}, {match}) => ({
  counts,
  owner: match.params.owner,
  repoName: match.params.repo,
})
const composed = compose<any>(provideHooks(hooks), connect(mapStateToProps, actions))
export default composed(RepoPageContainer)
