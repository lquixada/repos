import React from 'react'
import {List} from 'immutable'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import {Menu} from '../components/menu'
import * as actions from '../actions'

export class MenuContainer extends React.Component {
  hasLoaded () {
    const data = this.props.repos.getIn([this.props.owner, 'data'])
    return !!data
  }

  render () {
    if (!this.hasLoaded()) {
      return <div style={{color: '#333'}}>Loading...</div>
    }

    return (
      <Menu {...this.props} />
    )
  }
}

const mapStateToProps = ({repos, repo}, {match}) => ({
  repos,
  owner: match.params.owner,
  items: repos.getIn([match.params.owner, 'data'], List()).map((item) => {
    const {owner} = match.params
    const repoName = item.get(0)
    const count = item.get(1)
    const isLoading = repo.getIn([owner, repoName, 'isLoading'])

    return List.of(repoName, count, isLoading)
  })
})

// We need "withRouter" in order to NavLink active state work
export default withRouter(connect(mapStateToProps, actions)(MenuContainer))
