import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {OwnerPage} from '../../components/page/owner'
import {provideHooks} from '../../helpers'
import * as actions from '../../actions'

const hooks = {
  fetch: ({params, dispatch}) => dispatch(actions.fetchPage({
    name: 'owner',
    owner: params.owner
  }))
}

export class OwnerPageContainer extends React.Component {
  componentDidMount () {
    if (!this.hasLoaded()) {
      this.fetch()
    }
  }

  componentDidUpdate (prevProps) {
    if (this.hasChanged(prevProps)) {
      this.fetch()
    }
  }

  fetch () {
    this.props.fetchPage({
      name: 'owner',
      owner: this.props.owner
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
      <OwnerPage />
    )
  }
}

const mapStateToProps = ({counts}, {match}) => ({
  counts,
  owner: match.params.owner,
  repoName: match.params.repo
})
const composed = compose(provideHooks(hooks), connect(mapStateToProps, actions))
export default composed(OwnerPageContainer)
