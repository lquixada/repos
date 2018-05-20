import React from 'react';
import {connect} from 'react-redux';

import {Contributors} from '../../components/repo/contributors';
import * as actions from '../../actions';

export class ContributorsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.fetchNext = this.fetchNext.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.repoName !== this.props.repoName) {
      this.fetch();
    }
  }

  fetch() {
    if (!this.hasLoaded()) {
      this.props.fetchContributors(this.props.repoName);
    }
  }

  fetchNext() {
    const {repoName, contributors} = this.props;
    this.props.fetchMoreContributors(repoName, contributors.next);
  }

  hasLoaded() {
    const {contributors} = this.props;
    return contributors && contributors.data && contributors.data.length !== 0;
  }

  hasMore() {
    return !!this.props.contributors.next;
  }

  isLoading() {
    return this.props.contributors.isLoading;
  }

  getCount() {
    const {count} = this.props;
    return count? count[1] : 'error';
  }

  render() {
    if (!this.hasLoaded()) {
      return null;
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
    );
  }
}


const mapStateToProps = ({contributors, reposContributorsCount}, {repoName}) => ({
  // REMEMBER: "reposContributorsCount" has the following
  // scheme [[repoName1, count1], [repoName2, count2]]
  count: reposContributorsCount.find(([repo]) => repo === repoName),
  contributors: contributors[repoName]
});

export default connect(mapStateToProps, actions)(ContributorsContainer);
