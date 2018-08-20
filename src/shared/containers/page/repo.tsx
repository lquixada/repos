import {Map} from 'immutable'
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
  counts: Map<string, any>
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

  public fetch() {
    const {owner, repoName} = this.props

    this.props.fetchPage({
      name: 'repo',
      owner,
      repoName,
    })
  }

  public hasChanged(prevProps) {
    return (
      prevProps.owner !== this.props.owner
    )
  }

  public hasLoaded() {
    const counts = this.props.counts.get(this.props.owner)
    return counts && counts.get('data') && !counts.get('data').isEmpty()
  }

  public render() {
    return (
      <RepoPage repoName={this.props.repoName} />
    )
  }
}

const mapStateToProps = ({counts}, {match}) => ({
  counts,
  owner: match.params.owner,
  repoName: match.params.repo,
})
const composed = compose<any>(provideHooks(hooks), connect(mapStateToProps, actions))
export default composed(RepoPageContainer)
