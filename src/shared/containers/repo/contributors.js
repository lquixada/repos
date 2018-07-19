import React from 'react'
import {connect} from 'react-redux'
import {List} from 'immutable'

import {Contributors} from '../../components/repo/contributors'
import * as actions from '../../actions'

export class ContributorsContainer extends React.Component {
  constructor (props) {
    super(props)
    this.fetchNext = this.fetchNext.bind(this)
  }

  fetchNext () {
    this.props.fetchContributors({
      owner: this.props.owner,
      repoName: this.props.repoName
    })
  }

  hasLoaded () {
    const {contributors} = this.props
    return contributors && contributors.get('data') && !contributors.get('data').isEmpty()
  }

  hasMore () {
    return !!this.props.contributors.get('nextPage')
  }

  isLoading () {
    return this.props.contributors.get('isLoading')
  }

  getCount () {
    const {count} = this.props
    return count ? count.get(1) : 'error'
  }

  render () {
    if (!this.hasLoaded()) {
      return null
    }

    return (
      <Contributors
        total={this.getCount()}
        data={this.props.contributors.get('data')}
        isLoadingMore={this.isLoading()}
        hasLoaded={this.hasLoaded()}
        hasMore={this.hasMore()}
        onNext={this.fetchNext}
      />
    )
  }
}

const mapStateToProps = ({contributors, counts}, {owner, repoName}) => ({
  // REMEMBER: "counts" has the following
  // scheme [[repoName1, count1, false], [repoName2, count2, false]]
  count: counts.get('data', List()).find((count) => count.get(0) === repoName),
  contributors: contributors.getIn([owner, repoName])
})

export default connect(mapStateToProps, actions)(ContributorsContainer)
