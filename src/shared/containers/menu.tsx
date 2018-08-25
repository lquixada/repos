import get from 'lodash.get'
import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import * as actions from '../actions'
import {Menu} from '../components/menu'
import {Count, ICounts} from '../types'

interface IProps {
  counts: ICounts
  items: Count[]
  owner: string
}

export class MenuContainer extends React.Component<IProps, any> {
  public hasLoaded() {
    const data = get(this.props.counts, `${this.props.owner}.data`)
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
  items: get(counts, `${match.params.owner}.data`, []).map((item) => {
    const {owner} = match.params
    const repoName = item[0]
    const count = item[1]
    const isLoading = get(repo, `${owner}.${repoName}.isLoading`)

    return [repoName, count, isLoading]
  }),
  owner: match.params.owner,
})

// We need "withRouter" in order to NavLink active state work
export default withRouter(connect(mapStateToProps, actions)(MenuContainer))
