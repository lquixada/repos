import get from 'lodash.get'
import React from 'react'
import {connect} from 'react-redux'

import * as actions from '../../actions'
import {Contributors} from '../../components/repo/contributors'

interface IContributors {
  data: any[]
  isLoading: boolean
  nextPage: number,
}

interface IProps {
  owner: string
  repoName: string
  contributors: IContributors
  count: string[]
  fetchContributors(payload: object): void
  onNext(f: any): any
}

export class ContributorsContainer extends React.Component<IProps, any> {
  constructor(props) {
    super(props)
    this.fetchNext = this.fetchNext.bind(this)
  }

  public fetchNext() {
    this.props.fetchContributors({
      owner: this.props.owner,
      repoName: this.props.repoName,
    })
  }

  public hasLoaded() {
    const {contributors} = this.props
    return contributors && contributors.data && contributors.data.length > 0
  }

  public hasMore() {
    return !!this.props.contributors.nextPage
  }

  public isLoading(): boolean {
    return this.props.contributors.isLoading
  }

  public getCount(): string {
    const {count} = this.props
    return count ? count[1] : 'error'
  }

  public render() {
    if (!this.hasLoaded()) {
      return null
    }

    return (
      <Contributors
        total={this.getCount()}
        data={this.props.contributors.data}
        isLoadingMore={this.isLoading()}
        hasLoaded={this.hasLoaded()}
        hasMore={this.hasMore()}
        onNext={this.fetchNext}
      />
    )
  }
}

const mapStateToProps = ({contributors, counts}, {owner, repoName}) => ({
  contributors: get(contributors, `${owner}.${repoName}`),
  // REMEMBER: "counts" has the following
  // scheme [[repoName1, count1, false], [repoName2, count2, false]]
  count: get(counts, 'data', []).find((count) => count[0] === repoName),
})

export default connect(mapStateToProps, actions)(ContributorsContainer)
