import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {List} from 'immutable';

import {Menu} from '../components/menu';
import * as actions from '../actions';

export class MenuContainer extends React.Component {
  componentDidMount() {
    if (!this.hasLoaded()) {
      this.props.fetchReposContributorsCount();
    }
  }

  hasLoaded() {
    return !this.props.items.isEmpty();
  }

  render() {
    return (
      <Menu items={this.props.items} />
    );
  }
}

const mapStateToProps = ({reposContributorsCount, repo}, {match}) => ({
  items: reposContributorsCount.map((item) => {
    const repoName = item.get(0);
    const count = item.get(1);
    const isLoading = repo.getIn([repoName, 'isLoading']);

    return List.of(repoName, count, isLoading);
  })
});

// We need "withRouter" in order to NavLink active state work
export default withRouter(connect(mapStateToProps, actions)(MenuContainer));
