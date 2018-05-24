import React from 'react';
import {connect} from 'react-redux';

import {Repo} from '../../components/repo';
import * as actions from '../../actions';

export class RepoContainer extends React.Component {
  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps) {
    if (this.hasChanged(prevProps)) {
      this.fetch();
    }
  }

  fetch() {
    if (!this.hasLoaded()) {
      this.props.fetchRepo(this.props.match.params.repo);
    }
  }

  hasLoaded() {
    const {repo} = this.props;
    return repo && repo.get('data');
  }

  hasChanged(prevProps) {
    return prevProps.match.params.repo !== this.props.match.params.repo;
  }

  render() {
    if (!this.hasLoaded()) {
      return null;
    }

    return (
      <Repo repo={this.props.repo.get('data')} />
    );
  }
}

const mapStateToProps = ({repo}, {match}) => ({
  repo: repo.get(match.params.repo)
});
export default connect(mapStateToProps, actions)(RepoContainer);
