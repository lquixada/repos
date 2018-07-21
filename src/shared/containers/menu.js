import React from 'react'
import {List} from 'immutable'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import {Menu} from '../components/menu'
import * as actions from '../actions'

export class MenuContainer extends React.Component {
  hasLoaded () {
    const data = this.props.counts.getIn([this.props.owner, 'data'])
    return !!data
  }

  render () {
    if (!this.hasLoaded()) {
      return <div style={{color: '#333'}}>Loading...</div>
    }

    return (
      <Menu owner={this.props.owner} items={this.props.items} />
    )
  }
}

const mapStateToProps = ({counts, repo}, {match}) => ({
  counts,
  owner: match.params.owner,
  items: counts.getIn([match.params.owner, 'data'], List()).map((item) => {
    const {owner} = match.params
    const repoName = item.get(0)
    const count = item.get(1)
    const isLoading = repo.getIn([owner, repoName, 'isLoading'])

    return List.of(repoName, count, isLoading)
  })
})

// We need "withRouter" in order to NavLink active state work
export default withRouter(connect(mapStateToProps, actions)(MenuContainer))
