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
      this.props.fetchRepo(this.props.name);
    }
  }

  hasLoaded() {
    const {repo} = this.props;
    return repo && repo.get('data');
  }

  hasChanged(prevProps) {
    return prevProps.name !== this.props.name;
  }

  render() {
    if (!this.hasLoaded()) {
      return <div>Loading...</div>;
    }

    return (
      <Repo repo={this.props.repo.get('data')} />
    );
  }
}

const mapStateToProps = ({repo}, {name}) => ({
  repo: repo.get(name)
});
export default connect(mapStateToProps, actions)(RepoContainer);
