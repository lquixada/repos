import {List, Map} from 'immutable'
import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import * as actions from '../actions'
import {Menu} from '../components/menu'

interface IProps {
  counts: Map<string, string>
  items: List<any>
  owner: string
}

export class MenuContainer extends React.Component<IProps, any> {
  public hasLoaded() {
    const data = this.props.counts.getIn([this.props.owner, 'data'])
    return !!data
  }

  public render() {
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
  items: counts.getIn([match.params.owner, 'data'], List()).map((item) => {
    const {owner} = match.params
    const repoName = item.get(0)
    const count = item.get(1)
    const isLoading = repo.getIn([owner, repoName, 'isLoading'])

    return List.of(repoName, count, isLoading)
  }),
  owner: match.params.owner,
})

// We need "withRouter" in order to NavLink active state work
export default withRouter(connect(mapStateToProps, actions)(MenuContainer))
