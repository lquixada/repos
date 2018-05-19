import React from 'react';

import Contributors from '../../containers/repo/contributors';
import {Description} from './description';
import {Header} from './header';
import {Summary} from './summary';

export class Repo extends React.Component {
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
    return repo && repo.data;
  }

  hasChanged(prevProps) {
    return prevProps.match.params.repo !== this.props.match.params.repo;
  }

  render() {
    const {repo} = this.props;

    if (!this.hasLoaded()) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div>
        <Header title={repo.data.name} url={repo.data.html_url} />
        <Description text={repo.data.description} />
        <Summary repo={repo.data} />
        <Contributors repoName={repo.data.name} />
      </div>
    );
  }
}
