import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {OwnerPage} from '../../components/page/owner'
import {provideHooks} from '../../helpers'
import * as actions from '../../actions'

const hooks = {
  fetch: ({params, dispatch}) => dispatch(actions.fetchPage({
    name: 'owner',
    owner: params.owner || 'facebook'
  }))
}

export class OwnerPageContainer extends React.Component {
  componentDidMount () {
    this.fetch()
  }

  componentDidUpdate (prevProps) {
    if (this.hasChanged(prevProps)) {
      this.fetch()
    }
  }

  fetch () {
    this.props.fetchPage({
      name: 'owner',
      owner: this.props.owner || 'facebook'
    })
  }

  hasChanged (prevProps) {
    return (
      prevProps.owner !== this.props.owner
    )
  }

  render () {
    return (
      <OwnerPage />
    )
  }
}

const mapStateToProps = (state, {match}) => ({
  owner: match.params.owner,
  repoName: match.params.repo
})
const composed = compose(provideHooks(hooks), connect(mapStateToProps, actions))
export default composed(OwnerPageContainer)
